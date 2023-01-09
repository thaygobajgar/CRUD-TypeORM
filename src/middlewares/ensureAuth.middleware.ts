import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  !token && res.status(401).json({ message: "Token required" });

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    error &&
      res.status(401).json({
        message: error.message,
      });
    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
    };
    return next();
  });
};

export default ensureAuthMiddleware;
