
const alunosJr = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];



function alunosAprovadosJr(arrei,medi){
    let aprovados = [];
    for (let i = 0; i < arrei.length; i++) {
        const {nota,nome} = arrei[i];
        
        if(nota >= medi){
            aprovados.push(nome);
        }
        
    } return aprovados;
}
console.log(alunosAprovadosJr(alunosJr,5));

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const animal = {
	nome: 'toto',
	idade: 13,
};

console.log(calculaIdade.call(pessoa2, 40));
console.log(calculaIdade.apply(pessoa1, [24]));