import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "melihkochan";
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub projects");
    }

    const repos = await response.json();

    // Özel homepage linkleri (GitHub'da homepage tanımlı değilse veya farklı bir link kullanmak istiyorsak)
    const customHomepages: Record<string, string | null> = {
      "WhereAmI": "https://whereami-mu.vercel.app/",
      "InfluencerStudioAi": null, // Demo linki pasif
    };

    const projects = repos.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || null,
      url: repo.html_url,
      // Önce customHomepages'e bak, yoksa GitHub'dan gelen homepage'i kullan
      homepage: customHomepages[repo.name] !== undefined ? customHomepages[repo.name] : (repo.homepage || null),
      language: repo.language || "Other",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: repo.updated_at,
      topics: repo.topics || [],
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
