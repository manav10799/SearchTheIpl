const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')

readXlsxFile('./pre-process/info/Players.xlsx').then((rows) => {
  var players = {}
  var isFirst = true
  console.log(rows.length)
  rows.forEach(([name, date, hand, role, country]) => {
    if (date)
    date = date.toString()
    if (!isFirst) {
      players[name] = {
        date, hand, role, country, name
      }
    }
    isFirst = false
  })
  console.log(players)
  // fs.writeFile('./src/players.txt', JSON.stringify(players), (err) => {
  //   if (err)
  //   console.log(err)
  // })
})
.catch(err => {
  console.log(err)
})