const path = require('path')
const fs = require('fs')

const p = path.join('html','data','card.json')

class Card{
   static async add(course){
      const card = await Card.fetch()
      const idx = card.courses.findIndex(c => c.id === course.id)
      const cond = card.courses[idx]
      if(cond){
         cond.count++
         card.courses[idx] = candidate
      }else{
         course.count = 1
         card.courses.push(course)
      }
      card.price += +course.price
      return new Promise((resolve,reject)=>{
         fs.writeFile(p, JSON.stringify(card), err =>{
            if(err)reject(err)
            else resolve()
         })
      })
   }
   static async fetch(){
      return new Promise((resolve,reject)=>{
         fs.readFile(p,'utf-8', (err, content)=>{
            if(err){
               reject(err)
            }else{
               resolve(JSON.parse(content))
            }
         })
      })
   }
}

module.exports = Card