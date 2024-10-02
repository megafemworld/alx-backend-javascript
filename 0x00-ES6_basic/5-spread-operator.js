export default function concatArrays(array1, array2, string) {
  const a = [...array1, ...array2];
  for (const s of string) {
    a.push(s);
  }
  return a;
}
