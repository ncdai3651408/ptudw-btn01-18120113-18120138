const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('ptudw-btn01-18120113-18120138')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
