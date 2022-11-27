// import { isLoggedInStatic } from "./guard";
import express from "express";
import type { Request, Response } from "express";
import { dbClient } from "./main";
import { checkPassword } from "./hash";
// import { User } from "../model";


export const userRoutes = express.Router();

userRoutes.post("/login", login);``

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "missing username/password" });
    return;
  }

  const queryResult = await dbClient.query<User>(
    "SELECT id, username, password FROM users WHERE username = $1",
    [username]
  );
  const user = queryResult.rows[0];

  if (!user || !(await checkPassword(password, user.password))) {
    res.status(400).json({ message: "invalid username/password" });
    return;
  }

  req.session.user = { id: user.id };
  res.json({ message: "success" });
}
