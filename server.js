const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', function (req, res){
    res.render('login')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running on port ' + port));