require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/',(req, res)=>{
    res.send('Servidor rodando na escola');

});

app.get('/info', (req,res)=>{

res.json({
    escola:    process.env.ESCOLA,
    curso:     process.env.CURSO,
    professor: process.env.PROFESSOR
})
})


//PARA RODAR O SERVIDOR
app.listen(PORT,()=>{
    console.log(`Servidor rodando http://localhost:${PORT}`)

})