#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* echo() {
    // Use 'yield' in here
    // Your implementation here
    //let echoContent = yield fs.readFile(__filename, console.log);
    if (process.argv.length > 2) {
        var echoContent = process.argv[2];
        process.stdout.write(echoContent + '\n')
    }
}
module.exports = echo
