
function ex1(){
    
    /*Exercício: Escreva um programa que leia dois numeros e apresente um numero de opcoes com o o mostrado abaixo:
    
    Escolha a opção:
    
    A - Soma de 2 numeros
    B - Diferença entre 2 numeros (maior pelo menor)
    C - Produto entre 2 numeros
    D- Divisão entre 2 números (o denominador não pode ser zero).
    
    Leia a opção do usuário e execute a operação com os dois números lidos anteriormente.
    Caso a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para o usuário.
    
    Lembre-se de usar funções para organizar seu programa
    
    parseFloat() parseInt() */

    // Dica: Achar formas de escrever no JS ex: pular linha
    
    var tipo = prompt("Escolha qual operação deseja: \n A (Soma) \n B(Subtração) \n C(Multiplicação) \n D(Divisão)").toUpperCase();
    var num1 = parseInt(prompt("Digite um número"));
    var num2 = parseInt(prompt("Digite o outro número"));
    
    switch (tipo){
        case "A":
            alert(num1 + num2);
            break;
        case "B":
            alert(num1 - num2);
            break;
        case "C":
            alert(num1 * num2);
            break;
        case "D":
            alert(num1/num2);
            break;
    }
} 

//Exemplo de FOR

function ex2(){

var frutas = ["ameixa", "mirtilo", "amora", "pitanga", "jabuticaba", "lixia", "atemoia"];

for(var fruta=0; fruta<frutas.length; fruta++){
    alert("minha salada de frutas tem: " + frutas[fruta]);

 }
}

//Exemplo de FOR IN
//Imprimi os valores das chaves: 40, 24, 48, sim. 
//Para imprimir as chaves e não o valor delas bastava colocar console log ([chave])

function ex3(){

    var saladeaula = {
        "alunos":40,
        "mesas":24,
        "cadeiras": 48,
        "projetor": "sim"
    }

//Roda o numero de vezes que tiver os objetos e roda sempre as CHAVES. LOGO para ter acesso aos valores precisa fazer como esta abaixo.

    for(chave in saladeaula){
        console.log(saladeaula[chave]);

    }
    
    
    }