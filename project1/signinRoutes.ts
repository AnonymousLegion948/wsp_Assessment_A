import express from "express"
import { Request, Response } from 'express'
import { checkPassword } from "./hash"

export const signinRoutes = express.Router();