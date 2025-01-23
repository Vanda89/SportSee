const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3002
const API_HOST = process.env.API_HOST || 'localhost'

app.use(router)

app.listen(PORT, () => {
	console.log(`Server listening on http://${API_HOST}:${PORT}`)
})
