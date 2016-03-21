#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* touch() {
    try {
        if (process.argv.length > 2) {
            let filename = process.argv[2];
            yield fs.utimes(filename, new Date(), new Date())
        }
    }
    catch
        (error) {
        process.stdout.write(error + '\n')
    }

}
module.exports = touch
