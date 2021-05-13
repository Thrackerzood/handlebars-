const {Router} = require('express')
const router = Router()
const Course = require('../model/course.js')

router.get('/',(req,res)=>{
   res.render('add',{
      title: 'Добавить',
      add: true
   })
})
router.post('/', async (req,res)=>{
   const course = new Course(req.body.title,req.body.info,req.body.price, req.body.img)
   await course.save()
   res.redirect('/course')
})
module.exports = router