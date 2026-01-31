export const getGithubStats = async (req, res) => {
  try {
    const username = "arpit-yadav01"; // your GitHub username

    const response = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          "Accept": "application/vnd.github+json",
          "User-Agent": "portfolio-app"
        }
      }
    );

    if (!response.ok) {
      throw new Error("GitHub API error");
    }

    const data = await response.json();

    res.json({
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      profileUrl: data.html_url,
    });
  } catch (error) {
    console.error("GitHub Fetch Error:", error.message);
    res.status(500).json({ message: "GitHub fetch failed" });
  }
};
