// 起手式

var express = require('express')
var app = express()

app.get('/',function (req,res) {
  res.send('1234')
  console.log('1234')
})
// 取的 params 
app.get('/user/:name/:date',function (req,res) {
  var myName = req.params.name
  var myDate = req.params.date
  res.send(`<html><head></head><body>${myName} 於 ${myDate} 搜尋了資料</body></html>`)
  console.log(myName,myDate)
})

// 抓取 query
app.get('/user/:name/',function (req,res) {
  var myName = req.params.name
  var limit = req.query.limit
  var q = req.query.q

  res.send(`<html><head></head><body>${myName} 搜尋了${q}筆關於${limit}資料</body></html>`)
  console.log(myName,myDate)
})
// 監聽ｐort

var port = process.env.PORT || 3000;
app.listen(port)