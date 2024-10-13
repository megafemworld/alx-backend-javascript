export default function cleanSet(set, startString) {
  if (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valuesubstr = value.substring(startString.length);

      if (valuesubstr && valuesubstr !== value) {
        parts.push(valuesubstr);
      }
    }
  }
  return parts.join('-');
  }
