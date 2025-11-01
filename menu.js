// instalada a biblioteca que permite entrada de dados
import PromptSync from "prompt-sync";

// aciona a função da biblioteca
let prompt = PromptSync();

// class é um modelo de um objeto
class Pessoa {
  //atributo privado
  #senha;

  //construtor constroi mais de um objeto
  //para por os valores de cada objeto colocamos via parametro
  constructor(nome, senha) {
    this.nome = nome;
    this.#senha = senha;
  }

  apresentar() {
    console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
  }

  get senha() {
    let verSenha = prompt("Digite 1 se quiser ver sua senha: ");

    if (verSenha == 1) {
      let perguntaSenha = prompt("Qual sua data de nascimento? ");

      if (perguntaSenha == dataNascPessoa) {
        console.log(`Sua senha é ${this.#senha}`);
      } else {
        console.log("Data de nascimento incorreta");
      }
    }
  }
}

//Class aluno
class Aluno extends Pessoa {
  constructor(nome, senha, RA) {
    super(nome, senha);
    this.RA = RA;
  }

  //polimorfismo override
  apresentar() {
    console.log(`Olá sou o aluno ${this.nome} e meu RA é ${this.RA}`);
  }
}

//Class professor
class Professor extends Pessoa {
  //os parametros sao os valores das chaves(propriedades)
  constructor(nome, senha, salario, registro) {
    super(nome, senha);

    //sao as chaves = propriedades da classe
    this.salario = salario;
    this.registro = registro;
  }

  apresentar() {
    console.log(
      `Olá sou o professor ${this.nome}, meu registro é ${this.registro} e meu salario é ${this.salario}`
    );
  }
}

// pergunte ao usuario se ele e professor ou aluno
// se for professor digite 1 e alem das perguntas que a class pessoa ja tem, faca perguntas que sao da suas proprias caracteristicas
// se for aluno digite 2 e alem das perguntas que a class pessoa ja tem, faca perguntas que sao da suas proprias caracteristicas

let alunoOuProfessor = parseInt(
  prompt("Digite 1 para professor ou 2 para aluno")
);

let nomePessoa = prompt("Digite seu nome: ");
let senhaPessoa = prompt("Digite sua senha: ");

let pessoa;

if (alunoOuProfessor == 1) {
  let salarioProfessor = parseFloat(prompt("Digite seu salario: "));
  let registroProfessor = prompt("Digite seu registro: ");

  pessoa = new Professor(
    nomePessoa,
    senhaPessoa,
    salarioProfessor,
    registroProfessor
  );
  console.log(pessoa);
} else if (alunoOuProfessor == 2) {
  let raAluno = prompt("Informe seu RA: ");

  pessoa = new Aluno(nomePessoa, senhaPessoa, raAluno);
  console.log(pessoa);
} else {
  console.log("Digite um numero valido");
}

// let nomePessoa = prompt("Digite o seu nome: ");
// let idadePessoa = parseInt(prompt("Digite a sua idade: "));
// let dataNascPessoa = prompt("Digite sua data de nascimento no formato americano(ano-mês-dia): ")
// let senhaPessoa = prompt("Digite sua senha: ")

// //criando o objeto (instanciando)
// const novaPessoa = new Pessoa(
//     nomePessoa,
//     idadePessoa,
//     dataNascPessoa,
//     senhaPessoa
// );

// //aciona a função do objeto ja criado
pessoa.apresentar();

// //exibir todo o objeto
// console.log(novaPessoa);

// novaPessoa.senha;
