export const getGithubStats = async (req, res) => {
  try {
    const username = "arpit-yadav01"; // 👈 Replace with your actual GitHub username
    
    console.log("🔍 Fetching GitHub stats for:", username);
    
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    
    if (!userResponse.ok) {
      throw new Error(`GitHub API returned ${userResponse.status}`);
    }
    
    const userData = await userResponse.json();
    console.log("✅ User data fetched:", userData.login);
    
    // Fetch repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    );
    
    if (!reposResponse.ok) {
      throw new Error(`Repos API returned ${reposResponse.status}`);
    }
    
    const reposData = await reposResponse.json();
    
    // ✅ Check if reposData is actually an array
    if (!Array.isArray(reposData)) {
      console.error("❌ GitHub API error response:", reposData);
      throw new Error("GitHub API returned non-array response");
    }
    
    console.log(`✅ Found ${reposData.length} repositories`);
    
    // Calculate total stars
    const totalStars = reposData.reduce((acc, repo) => {
      return acc + (repo.stargazers_count || 0);
    }, 0);
    
    console.log(`⭐ Total stars: ${totalStars}`);
    
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
    
    // Send fallback data instead of error
    res.json({
      repos: 0,
      followers: 0,
      following: 0,
      stars: 0,
      error: error.message,
    });
  }
};