const fs = require('fs');
const path = require('path');

const pathCache = path.join(__dirname, '../', 'node_modules', '.cache');

fs.stat(pathCache, function (err) {
   if (!err) {
      fs.rm(pathCache, { recursive: true }, (err) => {
         console.error('CLEAR CACHE');
      });
   } else if (err.code === 'ENOENT') {
      console.log('No dir .cache!');
   }
});
