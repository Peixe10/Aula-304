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
    
    var tipo = prompt("Escolha qual operação deseja: A (+), B(-), C(*) e D(/)").toUpperCase();
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