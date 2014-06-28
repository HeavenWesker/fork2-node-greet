#!/usr/bin/env node
var parseArgs = require('minimist')
var greet = require('../index.js')
console.log(greet(parseArgs(process.argv)._[2], parseArgs(process.argv)["drunk"]))
