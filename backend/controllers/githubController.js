export const getGithubStats = async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    console.log("🔍 Fetching GitHub stats for:", username);

    // Use token if available to avoid rate limiting
    const headers = token
      ? { Authorization: `token ${token}` }
      : {};

    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      { headers }
    );

    if (!userResponse.ok) {
      throw new Error(`GitHub user API returned ${userResponse.status}`);
    }

    const userData = await userResponse.json();
    console.log("✅ User data fetched:", userData.login);

    // Fetch repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub repos API returned ${reposResponse.status}`);
    }

    const reposData = await reposResponse.json();

    if (!Array.isArray(reposData)) {
      console.error("❌ GitHub API error response:", reposData);
      throw new Error("GitHub API did not return repos array");
    }

    console.log(`✅ Found ${reposData.length} repositories`);

    // Calculate total stars
    const totalStars = reposData.reduce((acc, repo) => {
      return acc + (repo.stargazers_count || 0);
    }, 0);

    const stats = {
      repos: userData.public_repos || 0,
      followers: userData.followers || 0,
      following: userData.following || 0,
      stars: totalStars,
    };

    console.log("📊 Sending stats:", stats);
    res.json(stats);

  } catch (error) {
    console.error("❌ GitHub API Error:", error.message);
    res.json({
      repos: 0,
      followers: 0,
      following: 0,
      stars: 0,
      error: error.message,
    });
  }
};