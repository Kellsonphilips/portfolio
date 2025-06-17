
const GITHUB_API_URL = ".env.local.GITHUB_API_URL";

export async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    const repos = await response.json();
    return repos.map(repo => ({
      title: repo.name,
      description: repo.description,
      githubUrl: repo.html_url,
      liveUrl: repo.homepage,
      tags: repo.topics || [],
      stars: repo.stargazers_count,
      forks: repo.forks_count
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function fetchGitHubProfile(username) {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub profile');
    }
    const profile = await response.json();
    return {
      name: profile.name,
      avatar: profile.avatar_url,
      bio: profile.bio,
      location: profile.location,
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos
    };
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
} 