/*
  Warnings:

  - Added the required column `meaning` to the `Words` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Words" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "appeardTimes" INTEGER NOT NULL,
    "clientId" INTEGER,
    CONSTRAINT "Words_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Words" ("appeardTimes", "clientId", "id", "word") SELECT "appeardTimes", "clientId", "id", "word" FROM "Words";
DROP TABLE "Words";
ALTER TABLE "new_Words" RENAME TO "Words";
CREATE UNIQUE INDEX "Words_word_key" ON "Words"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
