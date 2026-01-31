import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    // Expect header: Authorization: Bearer TOKEN
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET);

    // token is valid → continue
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
