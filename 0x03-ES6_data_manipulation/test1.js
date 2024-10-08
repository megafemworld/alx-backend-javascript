const buffer = new ArrayBuffer(16);
const view = new Uint8Array(buffer);

view[0] = 255;
console.log(view[0]); // 255