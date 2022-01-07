/* Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N

função gets() e da plataforma, essa função não está definida*/ 


let lines = gets().split('\n')

var N = parseInt(lines.shift())
for ( i = 1; i <= N; i++) {
	if ( i%2==0) 
        print(`${i} ^ 2 = ${i ** 2}`);
    };  
    
    /* Desafio
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha. 

Ocorreu muitos erros */

let lines = gets().split('\n');

let N = parseInt(lines.shift());

for (let i=1; i < 10000; i++) {

if (i%N == 2) print(i);

}