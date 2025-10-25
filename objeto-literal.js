//objeto
let pessoa = {
    nome: "cleiton",
    dataNasc: new Date(1997, 2, 7).toLocaleDateString("pt-BR"),
    altura: 1.73,
    peso: 87,
    senha: "123a",
    idade: 28,

    //maiorDeOdade: function () { }
    maiorIdade() {
        return this.idade >= 18;

    },
    apresentar() {
        //interpolação
        return `Olá eu me chamo ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura}M de altura`
    }
};

console.log(pessoa);
console.log(pessoa.maiorIdade());
console.log(pessoa.apresentar());
