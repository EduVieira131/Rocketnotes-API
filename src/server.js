const express = require('express')

const app = express()
app.use(express.json())

app.post('/user', (request, response) => {
  const { name, email } = request.body

  response.send(`O seu nome é ${name}, e o seu e-mail é ${email}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running in ${PORT}`))