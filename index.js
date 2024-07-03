const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/oi', function (req, res) {
  res.send('Olá Mundo!!')
})

// Lista de Personagnes
const lista = ['Rick Sanches', 'Morty Smith', 'Summer Smith']

// Read All - [GET] /item
app.get('/item', function (req, res){
  res.send(lista)
})

app.listen(3000)
