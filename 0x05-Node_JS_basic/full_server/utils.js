function readDatabase(path) {
  return new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (err, data) => {
        if (err || !data) {
          reject(Error('Cannot load the database'));
          return;
        }
    });
}
