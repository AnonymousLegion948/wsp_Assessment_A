import type { Request, Response, NextFunction } from 'express'

export const isLoggedInStatic = (req: Request, res: Response, next: NextFunction) => {
    console.log("isLoggedIn");
    console.log(req.session["user"]);
    if (!req.session["user"]) {
        res.redirect("/");
        return;
    }
    next()
};