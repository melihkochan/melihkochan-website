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

    // Özel homepage linkleri
    const customHomepages: Record<string, string> = {
      "WhereAmI": "https://whereami-mu.vercel.app/",
    };

    const projects = repos.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || null,
      url: repo.html_url,
      homepage: customHomepages[repo.name] || repo.homepage || null,
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
