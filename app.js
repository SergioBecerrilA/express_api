const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, () => {
    console.log(`Example app listenung on port ${port}`)
})

app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "name1"}
    const explorer2 = {id: 2, name: "name2"}
    const explorer3 = {id: 3, name: "name3"}
    const explorers = [explorer1, explorer2, explorer3]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req,res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Sergio"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Updated!!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Deleted"})
})