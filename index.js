const express = require('express')
const path = require('path')
const expHbr = require('express-handlebars')
const home = require('./html/routes/home.js')
const add = require('./html/routes/add.js')
const course = require('./html/routes/course.js')
const info = require('./html/routes/info.js')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT,(err) => {
   if(err) throw new err
   console.log('server is working')
})
const hbs = expHbr.create({
   defaultLayout: 'main',
   extname: 'hbs',
})

app.use(express.static('html/public'))
app.use('/',home)
app.use('/add',add)
app.use('/course',course)
app.use('/info',info)



app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'html')