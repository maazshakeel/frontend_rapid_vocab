import jwt from 'jsonwebtoken'
import env from 'dotenv'
import { Request, Response, NextFunction } from 'express';

const config = process.env;

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  // if not token
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    console.log(decoded)
    // req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export { verifyToken }
