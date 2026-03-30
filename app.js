const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  console.log('Someone pinged /version')
  res.send('1')
})

// Health Check
app.get('/health', (_req, res) => {
  console.log('Health check')
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
