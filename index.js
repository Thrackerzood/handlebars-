const express = require('express')
const path = require('path')
const expHbr = require('express-handlebars')

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

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'html')

app.get('/', (req, res) =>{
   res.render('home')
})
app.get('/about', (req, res) =>{
   res.render('about')
})