export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((quantity, fruit) => {
      if (quantity === 1) {
        map.set(fruit, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
