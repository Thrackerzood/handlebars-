const {Router} = require('express')
const router = Router()

router.get('/',(req,res)=>{
   res.render('info',{
      title: 'Информация',
      info: true
   })
})

module.exports = router