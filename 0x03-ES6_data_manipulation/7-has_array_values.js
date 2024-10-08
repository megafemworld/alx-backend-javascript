export default function hasValuesFromArray(set, array) {
  const setarray = new Set(array);
  const diff = set.intersection(setarray);
  if (diff.size == setarray.size) {
    return true;
  }
  return false;
}
