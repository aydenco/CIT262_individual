const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/ayden', (req,res) => {res.send("Hello Ayden")});

app.listen(port, ()=>console.log("Listening"));