const express = require('express')

const app = express();
//Middleware

//Routes
// app.get('/', (req, res)=>{
//     res.send('Home page')
// })
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/posts', function(req, res) {
    res.sendFile(__dirname + '/pages/posts.html');
});
  
app.get('/posts/data', (req, res)=>{
    res.send('Posts page')
})
app.post('/post', (req, res)=>{
    //Send form data
})
app.delete('/post', (req, res)=>{
    //Delete data
})
app.patch('/post', (req, res)=>{
    //Edit data
})

//Start server
app.listen(3000)