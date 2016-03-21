#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* mkdir(directory) {
    let dirName = directory.split("/")
    let dirPath = '';
    let i = 1;
    if (dirName[0] != '') {
        dirPath = dirName[0];
    }
    for (; i <= dirName.length; i++) {
        if (dirPath != '') {
            try {
                let stat = yield fs.stat(dirPath)
            } catch (e) {
                if ('ENOENT' == e.code) {
                    yield fs.mkdir(dirPath)
                    process.stdout.write("Folder created : " + dirPath + '\n');
                }
            }
        }
        dirPath = dirPath + "/" + dirName[i];
    }

}
function* main() {
    if (process.argv.length > 2) {
        let directory = process.argv[2]
        yield mkdir(directory)
    } else {
        process.stdout.write("Invalid Argument" + '\n')
    }

}

module.exports = main