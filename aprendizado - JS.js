// Comentários
// 1. Exibir mensagens no console
console.log("Olá, mundo!"); // Exibe uma mensagem no console do navegador

// 2. Declaração de variáveis
let variavelLet = "Sou uma variável let"; // Pode ser reatribuída
const variavelConst = "Sou uma constante"; // Não pode ser reatribuída
var variavelVar = "Sou uma variável var"; // Evitar o uso (mais antiga)

// 3. Tipos de dados
let numero = 42; // Número
let texto = "Texto em JavaScript"; // String
let booleano = true; // Booleano (true ou false)
let indefinido; // Variável sem valor (undefined)
let nulo = null; // Valor nulo (null)

// 4. Funções
function dizerOla(nome) {
    return `Olá, ${nome}!`; // Retorna uma saudação
}

console.log(dizerOla("Lucas"));

// 5. Estruturas de Controle
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Loop For
for (let i = 0; i < 5; i++) {
    console.log(`Contador: ${i}`);
}

// Loop While
let contador = 0;
while (contador < 5) {
    console.log(`While Contador: ${contador}`);
    contador++;
}

// 6. Manipulação do DOM (Document Object Model)
// Seleciona um elemento pelo ID
let elemento = document.getElementById("meuElemento");
console.log(elemento);

// Altera o conteúdo do texto do elemento
if (elemento) {
    elemento.innerText = "Texto alterado pelo JavaScript!";
}

// 7. Eventos
document.getElementById("botaoClique").addEventListener("click", function () {
    alert("Botão foi clicado!");
});

// 8. Arrays
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Acessa o primeiro elemento
frutas.push("Uva"); // Adiciona um elemento ao final
console.log(frutas);

// 9. Objetos
let pessoa = {
    nome: "Lucas",
    idade: 25,
    falar: function () {
        console.log("Olá, eu sou o " + this.nome);
    },
};

console.log(pessoa.nome); // Acessa uma propriedade do objeto
pessoa.falar(); // Chama um método do objeto

// 10. Funções Arrow (ES6)
const somar = (a, b) => a + b; // Função em uma linha
console.log(somar(5, 3));