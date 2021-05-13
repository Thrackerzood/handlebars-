const {Router} = require('express')
const router = Router()
const Course = require('../model/course')
const Card = require('../model/card')

router.post('/add', async(req,res)=>{
   const course = await Course.getById(req.body.id)
   await Card.add(course)
   res.redirect('/card')
})

router.get('/',async(req,res)=>{
   const card = await Card.fetch()
   res.render('cards',{
      title: 'Сохраненые курсы',
      isCard: true,
      courses: card.courses,
      price: card.price
   })
})

module.exports = router