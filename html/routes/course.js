const {Router} = require('express')
const router = Router()

router.get('/',(req,res)=>{
   res.render('course',{
      title: 'Курсы',
      course: true
   })
})

module.exports = router