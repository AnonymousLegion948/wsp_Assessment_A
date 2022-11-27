import { isLoggedInStatic } from "./guard"
import express from "express"
import { Request, Response } from 'express'
// import expressSession from "express-session"
import path from "path"
import expressSession from "express-session"
import pg from "pg" 

export const dbClient = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});
dbClient.connect();


const PORT = 8080
const app = express()


app.use(
  expressSession({
    secret: Math.random().toString(32).slice(2),
    resave: true,
    saveUninitialized: true,
  }),
)

declare module 'express-session' {
  interface SessionData {
    name?: string
  }
}

app.get('/', function (req: Request, res: Response) {
  res.end('Hello World')
})
// interface user {
//   id: number
//   username: string;
//   password: string;
// }

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const users = await readJasonData(USER_JSON_PATH)
// });


app.use(express.static(path.join(__dirname, 'public')))
app.use(isLoggedInStatic, express.static(path.join(__dirname, 'private')))


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`)
})
