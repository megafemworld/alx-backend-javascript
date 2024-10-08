export default function setFromArray(arrayset) {
  if (arrayset instanceof Array) {
    return new Set(arrayset);
  }
  return [];
}
