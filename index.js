const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("Lets dowit!!")
})

app.listen(5000, () => {
    console.log("server connected at port 5000")
})