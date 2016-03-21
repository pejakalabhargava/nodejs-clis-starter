#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* grep() {
    if (process.argv.length > 3) {
        let fileName = process.argv[3];
        let grepText = process.argv[2];
        let fileContent = yield fs.readFile(fileName, 'utf8');
        let lines = fileContent.split("\n")
        for (let line of lines) {
            if (line.indexOf(grepText) > -1) {
                process.stdout.write(line + '\n')
            }
        }
    }
}
module.exports = grep
