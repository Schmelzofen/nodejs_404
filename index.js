const express = require("express");
const path = require('path')
const app = express()


/* MIDDLEWARE */
app.use(express.static('public'));

app.use((req, _, next) => {
    console.log("New request: ", req.url, "Method: ", req.method)
    next()
})
/* ----------- */


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get("/community", function (req, res) {
    res.sendFile(path.join(__dirname, '/public/community.html'));
})

app.get("/solutions", function (req, res) {
    res.sendFile(path.join(__dirname, '/public/solutions.html'));
})


app.use((_, res) => {
    res.sendFile(__dirname + "/public/404.html")
})

const PORT = 1818
app.listen(PORT, () => console.log("Listening on Port: " + PORT))
