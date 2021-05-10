const {Router} = require('express')
const router = Router()

router.get('/',(req,res)=>{
   res.render('add',{
      title: 'Добавить',
      add: true
   })
})

module.exports = router