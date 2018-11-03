const fs = require("fs")
// const path = require('path');

class DirectoryReaderPlugin {
  constructor(options) {
    this.dir = options.dir;
    this.extension = options.extension;
  }

  apply(compiler) {
    console.log("----------", compiler);
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync('DirectoryReaderPlugin', (compilation, callback) => {
      console.log("----assets----", compilation.assets);
      fs.readdir(this.dir, (err, files) => {
        console.log(files);
        callback(files);
      })
    });
  }
}

module.exports = DirectoryReaderPlugin;