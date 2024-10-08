export default function hasValuesFromArray(set, array) {
  if (array instanceof Array) {
    return new Set(array).isSubsetOf(set);
  }
  return false;
}
