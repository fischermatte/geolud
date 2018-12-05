/**
 * Zips the dist folder without node_modules. To be used when uploading a release.
 */
const version = require('./package.json').version;
const fs = require('fs');
const archiver = require('archiver');

if (!fs.existsSync('target')) {
  fs.mkdirSync('target');
}

const output = fs.createWriteStream('target/geolud-server-node-' + version + '.zip');
const archive = archiver('zip');

archive.on('error', function (err) {
  throw err;
});


archive.pipe(output);
archive.glob('**/*', {
  cwd: 'dist',
  ignore: ['node_modules/**'],
  nodir: false
}, function (err, files) {
  console.log(files);
});
archive.finalize();
