export const getLeetcodeStats = async (req, res) => {
  try {
    const username = "buffer_stack"; // 👈 change this

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const json = await response.json();

    const stats =
      json.data.matchedUser.submitStatsGlobal.acSubmissionNum;

    const easy = stats.find((s) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s) => s.difficulty === "Hard")?.count || 0;

    res.json({
      total: easy + medium + hard,
      easy,
      medium,
      hard,
    });
  } catch (err) {
    console.error("LeetCode fetch failed", err.message);
    res.status(500).json({ message: "LeetCode fetch failed" });
  }
};
