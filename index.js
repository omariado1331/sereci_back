const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hola mundo')

})

app.listen(port, () =>{
    console.log('server corriendo en port 3000S')
})
