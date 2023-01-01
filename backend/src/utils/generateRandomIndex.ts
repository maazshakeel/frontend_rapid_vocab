const indexes = (x: number): number[] => {
  const randomIndexes: number[] = [];
  while (1) {
    if (randomIndexes.length === x) {
      break;
    }

    const randomIndex: number = Math.floor(Math.random() * x + 0);
    if (randomIndexes.includes(randomIndex)) {
      continue;
    }
    randomIndexes.push(randomIndex);
  }
  return randomIndexes;
};

export default indexes;
