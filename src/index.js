import express from 'express' 
import path from 'path'
const app = express() 

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug')

app.get('/' , (req , res) => {
  res.render('root')
})

app.listen(3000)