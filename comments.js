// Create web server

// Import modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

// Import files
const comments = require('./comments.js')

// Use cors and body-parser
app.use(cors())
app.use(bodyParser.json())

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments)
})

// Post new comment
app.post('/comments', (req, res) => {
    const comment = req.body
    comments.push(comment)
    res.json(comment)
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})