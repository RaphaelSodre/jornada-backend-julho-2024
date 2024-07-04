const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/oi', function (req, res) {
  res.send('Olá Mundo!!')
})

// Lista de Personagens
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

// Read By Id - [GET] /item/:id
app.get('/item/:id', function (req, res) {
  // Acessamos o parâmetro de rota ID
  const id = req.params.id

  // Acessamos o item na lista pelo índice corrigido (id - 1)
  const item = lista[id - 1]

  //Enviamos o item obtido como resposta
  res.send(item)

})

app.listen(3000)
