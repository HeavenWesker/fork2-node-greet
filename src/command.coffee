greet = require("./index")
command = ()->
  parseArgs = require("minimist")
  console.log(greet(parseArgs(process.argv)._[2], parseArgs(process.argv)["drunk"]))

module.exports = command
