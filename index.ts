import express from "express"
import bodyParser from "body-parser"
import Ads from "./ads.js"
import Categories from "./categories.js"

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
    const indentedAds = JSON.stringify(ads, null, 4);
    res.header("Content-Type", "application/json");
    res.send(indentedAds);
})

// GET endpoint to retrieve all categories
app.get('/categories', (req, res) => {
    const indentedCategories = JSON.stringify(categories, null, 4);
    res.header("Content-Type", "application/json");
    res.send(indentedCategories);
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
