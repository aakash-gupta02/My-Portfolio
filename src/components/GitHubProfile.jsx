import { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";

export default function GitHubProfile() {
  const [showGraph, setShowGraph] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/aakash-gupta02"),
          fetch(
            "https://api.github.com/users/aakash-gupta02/repos?sort=updated&per_page=6"
          ),
        ]);

        setProfileData(await profileRes.json());
        setRepos(await reposRes.json());
        setIsLoading(false);
      } catch (err) {
        console.error("GitHub API error:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center py-12">
        <FiRefreshCw className="animate-spin text-2xl text-indigo-400" />
      </div>
    );

  return (
    <article data-page="github" className="max-w-3xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">GitHub Profile</h2>
      </header>

      {/* Profile Section (unchanged) */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6 bg-gray-900/50 p-6 rounded-2xl border border-gray-700">
          <img
            src={profileData.avatar_url}
            alt="GitHub avatar"
            className="w-24 h-24 rounded-full border-2 border-indigo-400"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold">
                {profileData.name || profileData.login}
              </h3>
              <a
                href={profileData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <IoLogoGithub size={24} />
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              {profileData.bio || "GitHub enthusiast"}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-medium">{profileData.public_repos}</span>
                <span className="text-gray-500">Repositories</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{profileData.followers}</span>
                <span className="text-gray-500">Followers</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{profileData.following}</span>
                <span className="text-gray-500">Following</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Contributions Section */}
      <section className="mb-8">

        <div className="flex justify-between items-center mb-8" >  

        
        <h3 className="text-2xl font-semibold mb-5">Contributions</h3>
        <button
          onClick={() => setShowGraph(!showGraph)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <span>{showGraph ? "Show Dots" : "Show Graph"}</span>
          <IoLogoGithub />
        </button>
</div>
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700">
          {showGraph ? (
            // Line Graph Version
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=aakash-gupta02&theme=github-compact&hide_border=true&bg_color=0D1117&color=58A6FF&line=1F6FEB&point=58A6FF`}
              alt="GitHub Activity Graph"
              className="w-full h-auto"
            />
          ) : (
            // Dot Grid Version
            <img
              src={`https://ghchart.rshah.org/2A303C/aakash-gupta02`}
              alt="GitHub Contributions"
              className="w-full h-auto filter brightness-110 contrast-125"
            />
          )}
          <p className="text-gray-500 text-sm mt-2">
            {showGraph
              ? "Commit activity over time"
              : "Daily contributions (darker = more commits)"}
          </p>
        </div>
      </section>

      {/* Repositories Section (unchanged) */}
      <section>
        <h3 className="text-2xl font-semibold mb-5">Recent Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-indigo-400">{repo.name}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span>{repo.stargazers_count}</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {repo.description || "No description provided"}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {repo.language && (
                  <span className="px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                    {repo.language}
                  </span>
                )}
                <span className="px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
