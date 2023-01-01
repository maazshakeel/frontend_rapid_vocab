import { PrismaClient } from "@prisma/client";
import allWords from "./allWords";
import choices from "./generateRandomChoices";
import indexes from "./generateRandomIndex";
import intToChar from "./intToChar";

const prisma = new PrismaClient();

export default async function word(id: number, wordsIdDisplayed: number[]) {
  // Get all words
  const rows: string = await allWords();
  // Get random word id from the list (above)
  let randomWordId: number = Math.floor(Math.random() * 102 + 1);
  while (wordsIdDisplayed.includes(randomWordId)) {
    randomWordId = Math.floor(Math.random() * 102 + 1);
  }

  // Get random word and meaning according to the id
  const randomWordAndMeaning: any = await prisma.words.findUnique({
    where: {
      id: randomWordId,
    },
    select: {
      id: true,
      word: true,
      meaning: true,
    },
  });

  // Make random choices
  const choice = await choices(3, randomWordAndMeaning.id);
  // Generate random indexes
  const randomIndexes = indexes(4);
  let correctOption: number = 0;
  for (let i = 0; i < 4; i++) {
    if (choice[randomIndexes[i]] === randomWordAndMeaning.meaning) {
      correctOption = i;
    }
  }

  // console.log(randomIndexes);
  const return_var = {
    id,
    word: randomWordAndMeaning.word,
    meaning: randomWordAndMeaning.meaning,
    options: {
      A: choice[randomIndexes[0]],
      B: choice[randomIndexes[1]],
      C: choice[randomIndexes[2]],
      D: choice[randomIndexes[3]],
    },
    correctOption: intToChar(correctOption),
  };
  return return_var;
}

// console.log(word(1, [1, 2, 3]).then((s) => console.log(s)));
