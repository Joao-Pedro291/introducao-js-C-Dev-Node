import express from "express";

const app = express();

//serviço = api (api = intermediador)

//rota que o cliente ira solicitar
app.get("/", (req, res) => {
  res.send("Primeiro dia com node");
});

app.listen(3000, () => {
  console.log("");
});
