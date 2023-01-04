import sqlite3 from "sqlite3";

// create a new database file users.db or open existing users.db
const db = new sqlite3.Database(
  __dirname + "/rapid.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the users.db database.");
    }
  }
);

export { db };
