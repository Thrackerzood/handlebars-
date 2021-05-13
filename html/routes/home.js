const {Router} = require('express')
const Course = require('../model/course')
const router = Router()

router.get('/',async(req,res)=>{
   const courses = await Course.getAll()
   res.render('home',{
      title: 'Курсы',
      courses
   })
})

module.exports = router