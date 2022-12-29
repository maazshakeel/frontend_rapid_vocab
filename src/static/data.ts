interface IObjectFormat {
  id: number;
  word: string;
  meaning: string;
  options: object;
  correctOption: string;
}

const questions: IObjectFormat[] = [
  {
    id: 1,
    word: "see",
    meaning: "melihat",
    options: ["contoh", "melihat", "berdiri", "jalan kaki"],
    correctOption: "melihat",
  },
  {
    id: 2,
    word: "have",
    meaning: "memiliki",
    options:[ 
      "akan",
      "tahu",
      "memiliki",
      "dichara",
    ],
    correctOption: "memiliki",
  },
  {
    id: 3,
    word: "Will",
    meaning: "akan",
    options: [ 
      "berbichara",
      "dingin",
      "akan",
      "bangat",
    ],
    correctOption: "akan",
  },
  {
    id: 4,
    word: "use",
    meaning: "gunakan",
    options:[ 
      "gw",
      "lo",
      "ghila",
      "gunakan",
    ],
    correctOption: "gunakan",
  },
];

export { questions };
