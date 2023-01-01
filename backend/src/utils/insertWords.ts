import fs from "fs";
import { parse } from "csv-parse";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// readable stream
const InsertWordsDB = (file: any) => {
  fs.createReadStream(file)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", async (row) => {
      // console.log(`Word: ${row[0]} -- \t -- Meaning: ${row[1]}`);

      const newWord = await prisma.words.create({
        data: {
          word: row[0],
          meaning: row[1],
          appeardTimes: 0,
        },
      });
    })
    .on("error", (error) => {
      console.log(error.message);
    })
    .on("end", () => {
      console.log("Finished");
    });
};

export { InsertWordsDB };
