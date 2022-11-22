import { isLoggedInStatic } from "./middleware"
import express from "express"
import { Request, Response } from 'express'
import expressSession from "express-session"
import path from "path"


const PORT = 8080
const app = express()


app.use(
  expressSession({
    secret: 'Tecky Academy teaches typescript',
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


app.use(express.static(path.join(__dirname, 'public')))
app.use(isLoggedInStatic, express.static(path.join(__dirname, 'private')))


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`)
})
