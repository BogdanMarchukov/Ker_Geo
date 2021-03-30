const express = require('express')
const config = require('config')

const app = express()

app.use('/api', require('./routes/save.routes'))


const PORT = config.get('port') || 5000

app.listen(PORT, () => {
    console.log(`server is running PORT ${PORT}`)
})
