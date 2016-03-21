#!/usr/bin/env node --harmony --use-strict --harmony_destructuring --harmony_default_parameters
require('./helper')
let fs = require('fs').promise
let path = require('path')


function* ls(rootPath, isRecur) {
    let fileNames = yield fs.readdir(rootPath)
    for (let fileName of fileNames) {
        let filePath = path.join(rootPath, fileName)
        let stats = yield fs.stat(filePath)
        if (!stats.isDirectory()) {
            process.stdout.write(filePath + '\n')
        } else if (isRecur && stats.isDirectory()) {
            yield ls(filePath, isRecur)
        }
    }
}

function* main() {
    if (process.argv.length > 2) {
        let directory = process.argv[2]
        let isRecursive = false
        if (process.argv[3] === '-R') {
            isRecursive = true
        }
        yield ls(directory, isRecursive)
    }

}
module.exports = main
