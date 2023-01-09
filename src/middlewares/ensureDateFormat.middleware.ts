import { NextFunction, Request, Response } from "express";

const ensureDateFormatMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.date.search("/")) {
    const newDate = req.body.date.split("/").join("-");
    req.body.date = newDate;
  }
  return next();
};
export default ensureDateFormatMiddleware;
