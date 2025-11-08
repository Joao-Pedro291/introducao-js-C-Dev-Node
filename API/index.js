// chamado para utilizar o framework express
import express from "express";

//chamamos o objeto com o nome express e passamos o valor dele mesmo, podendo acessar suas caracteristicas e comportamentos
const app = express();

//para o serviço conseguir interpretar em JSON
app.use(express.json());

// criar um array de frutas
let frutas = ["banana", "maçã", "kiwi"];

//serviço = api (api = intermediador)

//rota que o cliente ira solicitar
app.get("/", (req, res) => {
  res.send("Primeiro dia com node");
});

// rota usuario/1
app.get("/usuario/:id", (req, res) => {
  let id = req.params.id;
  res.send(`O cliente querendo ver o usuario com o id: ${id}`);
});

//uma rota que receba dois parametros e exiba em formato de objeto
app.get("/usuario/:nome/:idade", (req, res) => {
  let usuario = {
    nome: req.params.nome,
    idade: req.params.idade,
  };

  //res.send(usuario); -- codigo para exibir apenas o objeto
  res.send(
    `o nome do usuario é ${usuario.nome} e ele tem ${usuario.idade} anos`
  );
});

app.post("/fruta", (req, res) => {
  const novaFruta = req.body.nome;

  // o push vai inserir o dado em ordem sequencial
  frutas.push(novaFruta);
  res.send("fruta cadastrada com sucesso");
});

app.get("/fruta", (req, res) => {
  res.send(frutas);
});

app.put("/fruta/:posicao", (req, res) => {
  const posicao = req.params.posicao;
  const novoNome = req.body.nome;

  // acessamos a posicao da fruta desejada e atribuimos um novo valor
  frutas[posicao] = novoNome;

  res.send("O nome da fruta foi alterado para: " + novoNome);
});

app.delete("/fruta/:posicao", (req, res) => {
  const posicao = req.params.posicao;

  // acessamos a posicao da fruta desejada e atribuimos um novo valor
  frutas.splice(posicao, 1);

  res.send(`A fruta da posição ${posicao} foi excluída`);
});

// app listen precisa ser a ultima funcao
app.listen(3000, () => {
  console.log("iniciando api com express");
});
