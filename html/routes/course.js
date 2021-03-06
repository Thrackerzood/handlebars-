const {Router, response} = require('express')
const Course = require('../model/course')
const router = Router()

router.get('/', async(req,res)=>{
   const courses = await Course.getAll()
   res.render('course',{
      title: 'Курсы',
      courses
   })
})

router.get('/:id/edit',async(req,res)=>{
   if(!req.query.allow){
      return res.redirect('/')
   }
   const course = await Course.getById(req.params.id)

   res.render('course-edit',{
      title: `Редактировать ${course.title}`,
      course
   })
})

router.post('/edit', async (req,res) =>{
   await Course.update(req.body)
   return res.redirect('/')
})

router.get('/:id' , async(req,res)=>{
   const course = await Course.getById(req.params.id)
       res.render('cours',{
       layout: 'empty',
       title: `Курс ${course.title}`,
       course
    })
})
module.exports = router