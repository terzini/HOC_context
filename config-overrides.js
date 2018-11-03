const DirectoryReaderPlugin = require("./src/plugins/DirectoryReaderPlugin");

module.exports = function override(config, env) {
    if(!config.plugins){
        return config;
    }
    config.plugins.push(new DirectoryReaderPlugin({
        dir: './src/data',
        extensions: /\.json/
    }));
    return config;
  }