#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters

require('./helper')
let fs = require('fs').promise

function* ln() {
    if (process.argv.length > 3) {
        let source = process.argv[2];
        let dest = process.argv[3];
        yield fs.symlink(source, dest);
        process.stdout.write('Sym link created for files' +  '\n')
    }
}
module.exports = ln
