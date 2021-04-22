const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/js' , express.static(__dirname + 'public/js'))
app.use('/icons' , express.static(__dirname + 'public/icons'))

app.set('views' , './views')
app.set('view engine' , 'ejs')

app.get('',(req, res) => {
  res.render('index')
})
app.get('/about',(req, res) => {
  res.render('about')
})
app.get('/contact',(req, res) => {
  res.render('contact')
})
app.get('/projects',(req, res) => {
  res.render('projects')
})
app.get('/achievements',(req, res) => {
  res.render('achievements')
})
app.listen(port , () => console.info(`Listening and port ${port}`))
