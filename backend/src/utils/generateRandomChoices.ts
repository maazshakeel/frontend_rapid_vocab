import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const choices = async (x: number, randomWordId: number) => {
  const randomChoices = [];
  let i: number = 0;
  while (i < x) {
    const randomMeaningId: number = Math.floor(Math.random() * 102 + 1);
    if (randomMeaningId === randomWordId) {
      continue;
    }

    // get random choice
    const randomMeaning = await prisma.words.findUnique({
      where: {
        id: randomMeaningId,
      },
      select: {
        meaning: true,
      },
    });

    randomChoices.push(randomMeaning?.meaning);
    i++;
  }
  const correctChoice = await prisma.words.findUnique({
    where: {
      id: randomWordId,
    },
    select: {
      meaning: true,
    },
  });
  randomChoices.push(correctChoice?.meaning);
  return randomChoices;
};

// console.log(choices(3, 97).then((s) => console.log(s)));

export default choices;
