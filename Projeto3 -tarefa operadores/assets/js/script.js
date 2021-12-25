window.addEventListener("load",iniciar);
function iniciar(){
    document.getElementById("iniciar").addEventListener("click",entradaOperador);
}

var num1 = 0;
var num2 = 0;

function entradaOperador(){
    entrada();
    analise();
    analise2();

}
function entrada(){
let n1 = Number(prompt("Digite o primeiro numero de 0 a 20"));
let n2 = Number(prompt("Digite o segundo numero de 0 a 20"));
while((n1<0 || n1>20)||(n2<0 || n2>20)){
     n1 = Number(prompt("Digite o primeiro numero de 0 a 20"));
     n2 = Number(prompt("Digite o segundo numero de 0 a 20"));
     console.log(n1)
     console.log(n2)
}
 num1 = n1;
 num2 = n2;
}
function analise(){
if(num1 == num2){
var most = document.getElementById("mostrarjr");
most.innerHTML="Os numeros "+num1+" e "+num2+" são iguais";
}else{var most = document.getElementById("mostrarjr");
most.innerHTML="Os numeros "+num1+" e "+num2+" são diferentes";}
}
function analise2(){
    let soma = num1+num2;
    if((soma>10)&&(soma <20)){
        var most = document.getElementById("mostrarjr");
most.innerHTML+="\n Os numeros "+num1+" e "+num2+" somados são " +soma+" que é  maior que 10 e menor que 20.";
    }
}