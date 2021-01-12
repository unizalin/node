- Firebase 為非同步觀念
  - 跟 AJAX 一樣

- push
  - 類似 todoList  push 資料進去
``` 
  var todos = firsebase.database().ref('todos')
  todos.push({content:'今天要吃藥'})

  類似用 set 方式把 data 寫入，但是不會蓋過原先資料
  var data = {
    todos:{
      -MQpunRYD9ntmLpjXAEC :{
          content: '今天要吃藥' 
      },
      -MQpunRYD9ntmLpjXAEC :{
          content: '今天要吃藥' 
      } 
    }
  }
```