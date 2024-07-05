const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()

const dbUrl = 'mongodb+srv://admin:19NvKD5BTmQ5ljks@cluster0.b4hrgfd.mongodb.net/'
const dbName = 'ocean-jornada-backend'

const client = new MongoClient(dbUrl)

async function main() {
  console.log('Conectando ao banco de dados')
  await client.connect()
  console.log('Banco de dados conectado com sucesso')


  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  app.get('/oi', function (req, res) {
    res.send('Olá Mundo!!')
  })

  // Lista de Personagens
  const lista = ['Rick Sanches', 'Morty Smith', 'Summer Smith']

  const db = client.db(dbName)
  const collection = db.collection('item')

  // Read All - [GET] /item
  app.get('/item', async function (req, res) {
    // Obter todos os documentos
    const documentos = await collection.find().toArray()

    // Pegamos a lista e enviamos como resposta HTTP
    res.send(documentos)
  })
  //Sinalizar para o Express que vamos usar o JSON no Body
  app.use(express.json())

  // Create - [POST] /item
  app.post('/item', async function (req, res) {
//Obtemos o objeto inteiro enviando o Request Body
    const item = req.body

// Inserimos o item na collection
    await collection.insertOne(item)

// Exibe o item que foi adicionado
res.send(item)
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

  // Update - [PUT] /item/:id
  app.put('/item/:id', function (req, res) {
    // Acessamos o ID do parâmetro de rota
    const id = req.params.id

    // Acessamos o body da requisição, com os dados a serem atualizados
    const novoItem = req.body.nome

    // Atualizamos a lista com a nova informação
    lista[id - 1] = novoItem

    res.send('Item atualizado com sucesso' + id)
  })

  app.listen(3000)
}

main()