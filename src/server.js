const express = require('express')

const app = express()

app.post('/user', (request, response) => {
  response.send('Você chamou o post')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running in ${PORT}`))