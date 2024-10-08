export default function createInt8TypedArray(length, position, value) {
  if (length instanceof number === false) {
    throw new Error('Length must be a number');
  }
  if (position instanceof number === false) {
    throw new Error('Position must be a number');
  }
  if (value instanceof number === false) {
    throw new Error('Value must be a number');
  }
  const buffer = new ArrayBuffer(length);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const dataview = new DataView(buffer);
  dataview.setInt8(position, value);
  return dataview
}
