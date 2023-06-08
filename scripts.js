//Java script aceita quebra de linha, desconsidera espaços e é case sensitive 
//Pode ser usado $ ou _ para nomear, e nunca usar algum nome de comandos do javascrit

/* Tipos de saida 
alert("Sou uma alerta!")
console.log("Hello Word - Fernando Gates");
document.getElementById("texto").innerHTML="Meu primeiro texto em <b>JS</b>";
document.write('Oi escrito com <b>document.write</b>');
*/ 


/*Tipo de Variaveis - No Javascript temos 3 tipos de variaveis que ode ser declaradas
var v = "Fernando"; //Varia Globalmente
let l = 10; //Varia apenas dentro do seu bloco
const c = 100; //Nunca varia
alert(c); //imprime a variavel c
*/


/* Tipos Operadores
 1) Operadores Aritméticos (+ - * / )
 2) Operadores de Atribuição
 3) Operadores de sequencia
 4) Operadores de Comparação
 5_ Operadores Condicional (Ternário)
 6) Oeradores Lógicos  

 // +=soma, -=subtração, *=multilicação, /=divisão, 
 // == é igual, === valor e tipo iguais, != não é igual, !== ´valor e tipo não é igual
 // ++ incremente, --decrementa
 
//exemplo simples
var idade, eleitor;
idade=71;
eleitor= (idade<18) ? "Não, Eleitor":"Sim, Eleitor"; // Condicional(Ternário)

resultado = !(idade === 65 || idade === 72); //true //false &&=E ||=OU !=NÃO

console.log(resultado); //imprime no console a variavel resultado

*/

//Funções - Uma função é um bloco de codigo rojetado para executar uma tarefa especifica

//Função SOMA
function soma(valor1, valor2){
    return valor1 + valor2;
}

//Função de Cotação do DOLAR
function realparaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

real = 10;
cotacaoDolar = 5;

var total = realparaDolar(real, cotacaoDolar);
document.write("O valor em real é R$: "+real+"<br> O valor em dólar é U$: "+total);