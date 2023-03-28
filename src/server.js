const PORT = 8000
const express = require('express')
 const cors = require('cors')
 require('dotenv').config()

 const axios = require('axios')

 const app = express()

 const url = 15
 const token = "AstraCS:RPmfkIkIDqzjIFZYDIzKEBFl:1406f2aa2a4cd8297bdfa30e545b3de5d8f12376c4ef24ae7d8bedd7db41e939"


 app.listen(PORT, () => console.log('server running on PORT' + PORT))