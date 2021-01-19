## router 路由
-  https://www.google.com/search?q=tesla
  - http  https 協定
    - HyperText Transfer Protocol Secure
    - 有表單輸入建議用 https 
  - www.udemy.com domain 
    - 主網域，通常由域名供應商提供
      -  udemy.com 
    - 次網域，可以掛載載主網域下面，依據不同服務設置
      - www.
      - firebase.
  - search 路徑
  - ?q= 參數(query)

## params 指定路徑
- req.params 
  - 可取得網址後方的路徑

```
  app.get('/user/:name/:date',function (req,res) {
    var myName = req.params.name
    var myDate = req.params.date
    res.send('myName'+myName+'myDate'+myDate)

    console.log(myName,myDate)
  })

```

## query 取得網址參數
```
app.get('/user/:name/',function (req,res) {
  var myName = req.params.name
  var limit = req.query.limit
  var q = req.query.q

  res.send(`<html><head></head><body>${myName} 搜尋了${q}筆關於${limit}資料</body></html>`)
  console.log(myName,myDate)
})
```