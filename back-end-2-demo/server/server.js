const express = require('express')
const cors = require('cors')

const app = express()// order of these 5 lines matters

app.use(express.json())
app.use(cors())

const controller = require('./controller')
const {getMovies, deleteMovie, createMovie, updateMovie} = controller
app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)
app.listen(4004, () => console.log('having a poppin party on port 4004'))