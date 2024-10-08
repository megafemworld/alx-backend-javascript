export default function hasValuesFromArray(set, array) {
  if (array instanceof Array) {
    const bool = new Set(array).isSubsetOf(set);
    return bool;
  }
  return false;
}
