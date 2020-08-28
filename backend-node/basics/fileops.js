const fs = require('fs')
const os = require('os')

const IN_FILE_PATH = __dirname + '/random.txt'
const OUT_FILE_PATH = __dirname + '/sorted.txt'

fs.readFile(IN_FILE_PATH, function (err, data) {
  if (err) throw err

  let nums = data.toString().split(os.EOL)
  let sortedNums = nums.sort((a, b) => a - b)

  fs.writeFile(OUT_FILE_PATH, sortedNums.join(os.EOL), function (err) {
    if (err) throw err
  })
})
