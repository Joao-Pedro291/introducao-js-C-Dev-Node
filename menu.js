// instalada a biblioteca que permite entrada de dados
import PromptSync, { } from "prompt-sync";

// aciona a função da biblioteca
let prompt = PromptSync();

// class é um modelo de um objeto
class Pessoa {


    //atributo privado
    #senha;

    //construtor constroi mais de um objeto
    //para por os valores de cada objeto colocamos via parametro
    constructor(nome, idade, dataNasc, senha) {
        this.nome = nome;
        this.idade = idade;
        this.dataNasc = dataNasc;
        this.#senha = senha;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`)
    }

    get senha() {
        let verSenha = prompt("Digite 1 se quiser ver sua senha: ")

        if (verSenha == 1) {

            let perguntaSenha = prompt("Qual sua data de nascimento? ")

            if (perguntaSenha == dataNascPessoa) {
                console.log(`Sua senha é ${this.#senha}`)
            } else {
                console.log("Data de nascimento incorreta")
            }
        }

    }

}

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = parseInt(prompt("Digite a sua idade: "));
let dataNascPessoa = prompt("Digite sua data de nascimento no formato americano(ano-mês-dia): ")
let senhaPessoa = prompt("Digite sua senha: ")



//criando o objeto
const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa
);


//aciona a função do objeto ja criado
novaPessoa.apresentar();



//exibir todo o objeto
console.log(novaPessoa);

novaPessoa.senha;