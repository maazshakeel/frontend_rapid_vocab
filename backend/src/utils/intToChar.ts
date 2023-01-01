export default function intToChar(int: number) {
  const code = "A".charCodeAt(0);
  // console.log(code); // 👉️ 65

  return String.fromCharCode(code + int);
}
