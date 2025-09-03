const express = require('express')

require('./config/database')

const port = process.env.PORT

const router = require('./routes/productRouter')

const app = express()

app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(`app is running on port:${port}`);
})