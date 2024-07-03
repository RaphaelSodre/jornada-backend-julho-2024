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
app.get('/item', function (req, res) {
  res.send(lista)
})
//Sinalizar para o Express que vamos usar o JSON no Body
app.use(express.json())
// Create - [POST] /item
app.post('/item', function (req, res) {

  const item = req.body.nome 

  lista.push(item)

res.send('Item criado com sucesso')
})

app.listen(3000)
