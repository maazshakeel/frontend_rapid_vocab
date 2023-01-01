import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allWords: Function = async () => {
  const wordsList: any = [];
  const rows = await prisma.words.findMany();
  rows.map((row) => {
    wordsList.push({ id: row.id, word: row.word, meaning: row.meaning });
  });
  return wordsList;
};

// console.log(allWords().then((w: any) => console.log(w)));

export default allWords;
