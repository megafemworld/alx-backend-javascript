import ClassRoom from './0-classroom';

function initializeRooms() {
  const myr = [];
  const obj = [19, 20, 34];
  for (let i = 0; i < 3; i += 1) {
    const room = new ClassRoom(obj[i]);
    myr.push(room);
  }
  return myr;
}

export default initializeRooms;
