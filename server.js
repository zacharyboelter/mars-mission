const express = require('express');
const app = express();
const port = 3000;
const marsMissions = require("./models/mars");

app.get('/mars', (req, res) => {
    res.render("index.ejs", {allMars: marsMissions});
});


app.listen(port, () => {
    console.log('houston, we have a port', port);
});