import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TCreateComplaint } from "../types/rapid.type";
import jwt from "jsonwebtoken";
import word from "../utils/word";

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO";

// prisma client
const prisma = new PrismaClient();

const checkhealth = (_: any, res: Response) => {
  // Check if user gave right arguements
  // Get all words
  // Get random word id from the list (above)
  // Append the correct choice after that
  // Generate random indexes
  return res.json({ ok: "All good! 🙌" });
};

const words = async (req: Request, res: Response) => {
  // authencticate
  // @ts-ignore
  // logic....
  const wordsAlreadyAppeared: number[] = [];
  const response: object[] = [];
  for (let i = 0; i < parseInt(req.params.number); i++) {
    const wordToAdd = await word(i + 1, wordsAlreadyAppeared);
    wordsAlreadyAppeared.push(wordToAdd.id);
    response.push(wordToAdd);
  }
  res.json({ number: req.params.number, words: response });
};

export { checkhealth, words };
