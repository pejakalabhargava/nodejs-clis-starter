#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* cat() {
    try {
    if (process.argv.length > 2) {
        let fileContent = yield fs.readFile(process.argv[2]);
        process.stdout.write(fileContent + '\n')
     }
    } catch(error) {
        process.stdout.write(error + '\n')
    }
}
module.exports = cat
