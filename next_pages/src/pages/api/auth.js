// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from "./../../../data/users.json";

import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export default function auth(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  let pathToSeasions = path.join(
    __dirname,
    `..`,
    `..`,
    `..`,
    `..`,
    `data`,
    `seasions.json`
  );
  // Get the name and password from the request body
  const { name, password } = req.body;

  // Find the user with the specified email
  const user = users.find((u) => u.name === name);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Check if the password matches
  const ispasswordMatch = password == user.password;
  if (!ispasswordMatch) {
    return res.status(401).json({ error: "Invalid credentials password" });
  }

  const sessions = JSON.parse(fs.readFileSync(pathToSeasions, "utf-8"));
  //   // Create a session or token for the authenticated user

  const token = jwt.sign(
    { name: user.name, id: user.id, password: password },
    `secret`,
    {
      expiresIn: "1d",
    }
  );
  const sessionId = uuidv4();

  const session = { sessionId, token };
  sessions.push(session);

  fs.writeFileSync(pathToSeasions, JSON.stringify(sessions));

  //  setting the cookies to future auth
  res.setHeader("Set-Cookie", [
    `sessionId=${sessionId}; HttpOnly; SameSite=Strict; path=/;`,
    `token=${token}; HttpOnly; SameSite=Strict; Max-Age=86400; path=/;`,
  ]);
  // Return a success response
  res.status(200).json({ message: "Logged in successfully" });
}
