"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

interface GitHubProject {
  id: number;
  title: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  topics: string[];
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projeler
        </h2>
        <div className="flex justify-center items-center h-64">
          <p className="text-neutral-500">Yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return null; // Eğer proje yoksa section'ı gösterme
  }

  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projeler
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: GitHubProject }) => {
  return (
    <div className="group relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 dark:border-white/10 p-6 hover:border-white/20 transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white dark:text-white line-clamp-1">
          {project.title}
        </h3>
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
        >
          <SiGithub size={20} />
        </Link>
      </div>

      <p className="text-sm text-neutral-400 dark:text-neutral-300 mb-4 line-clamp-3">
        {getProjectDescription(project.title, project.description)}
      </p>

      <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500">
        {project.language && (
          <span className="px-2 py-1 bg-white/10 rounded">
            {project.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          ⭐ {project.stars}
        </span>
        <span className="flex items-center gap-1">
          🍴 {project.forks}
        </span>
      </div>

      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-1 bg-white/10 rounded text-neutral-400"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="w-full">
            <SiGithub size={16} className="mr-2" />
            GitHub
          </Button>
        </Link>
        {project.homepage && (
          <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink size={16} className="mr-2" />
              Demo
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

// Proje açıklamaları
const getProjectDescription = (title: string, githubDescription: string | null): string => {
  // Eğer GitHub'dan açıklama varsa ve boş değilse kullan
  if (githubDescription && githubDescription.trim() !== "") {
    return githubDescription;
  }

  // Proje ismine göre açıklamalar
  const descriptions: Record<string, string> = {
    "WhereAmI": "Konum tabanlı bir web uygulaması. Kullanıcıların mevcut konumlarını görüntülemesine ve paylaşmasına olanak tanır.",
    "oneiro": "Rüya takip ve analiz uygulaması. Kullanıcılar rüyalarını kaydedebilir ve analiz edebilir.",
    "SleepSounds": "Rahatlatıcı uyku sesleri ve meditasyon uygulaması. Daha iyi bir uyku deneyimi için tasarlandı.",
    "melihkochan-website": "Kişisel portfolio web sitesi. Modern ve interaktif bir tasarımla projeleri ve yetenekleri sergiler.",
    "lifeOS": "Yaşam yönetim sistemi. Görevler, notlar ve kişisel organizasyon için kapsamlı bir platform.",
    "InfluencerStudioAi": "AI destekli influencer yönetim platformu. İçerik oluşturma ve analiz araçları sunar.",
  };

  return descriptions[title] || "Modern web teknolojileri kullanılarak geliştirilmiş bir proje.";
};

export default ProjectsSection;
