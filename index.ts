import express from "express"
import bodyParser from "body-parser"
import Ads from "./ads"
import Categories from "./categories"

const app = express()
const port = 3000

app.use(bodyParser.json())

let ads: Ad[] = Ads
let categories: Category = Categories

// GET endpoint to error message
app.get('/', (req, res) => {
    res.json({error: "Invalid endpoint. Please use /ads or /categories"})
})

// GET endpoint to retrieve all ads
app.get('/ads', (req, res) => {
    res.json(ads)
})

// GET endpoint to retrieve all categories
app.get('/categories', (req, res) => {
    res.json(categories)
})

// PUT endpoint to update ad values
app.put('/ads', (req, res) => {
    ads = req.body
    res.json(ads)
})

// DELETE endpoint to delete last ad
app.delete('/ads', (req, res) => {
    ads = []
    res.status(204).end()
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
