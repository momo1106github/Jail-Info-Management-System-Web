const path = require('path')
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '/public')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'ejs')

app.get('/', function (req, res){
    res.render('login')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running on port ' + port));