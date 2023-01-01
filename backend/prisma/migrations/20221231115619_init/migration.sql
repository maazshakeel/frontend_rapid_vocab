/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Words` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Words` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "token" TEXT
);
INSERT INTO "new_Client" ("createdAt", "email", "id", "name", "password", "token", "verified") SELECT "createdAt", "email", "id", "name", "password", "token", "verified" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE TABLE "new_Words" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "appeardTimes" INTEGER NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Words_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Words" ("appeardTimes", "clientId", "id", "meaning", "word") SELECT "appeardTimes", "clientId", "id", "meaning", "word" FROM "Words";
DROP TABLE "Words";
ALTER TABLE "new_Words" RENAME TO "Words";
CREATE UNIQUE INDEX "Words_word_key" ON "Words"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
