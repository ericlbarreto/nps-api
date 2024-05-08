import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();

app.get("/", (request, response) => {

    return response.json({message: "Teste mensagem NLW"})
})

app.post("/", (request, response) => {
    return response.json({message: "Dados salvos com sucesso"})
})

app.listen(3333, () => console.log('Server is running!'));