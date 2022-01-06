
//map com emprego do this
const maca = {value: 02}
const laranja = {value: 03}

const nums = [1,2,3,5,7,8,11,14];
const lista = [{name:'sabão',preco:30},{name:'barrinha',preco:8},{name:'whey',preco:100}];
const dinheiro = 200;

function mapComThisjr(arr,thisArg){
    return arr.map(function(item,thisArg){
       return item*this.value;
    },thisArg);
}
//map sem emprego do this
function mapSemthis(arr){
    return arr.map(function(item){
        return item * 5;
    });
}
//filter 
function filtraPar(arr){
    return arr.filter(function(item){
       return item % 2 === 0;
    })
} 
function filtraImpar(arr){
    return arr.filter(function(item){
       return item % 2 !== 0;
    })
} 

//reduce
function somaNum(arr){
    return arr.reduce(function(prev,current){ 
        return prev + current;
    })
}
function saldoCompra(saldoDis,listaC){
    return lista.reduce(function(prev,current){
        console.log({prev,current});
        return prev - current.preco;
    },saldoDis);
}


console.log('this -> maça', mapComThisjr(nums,maca));
console.log('this -> laranja', mapComThisjr(nums,laranja));

console.log(mapSemthis(nums));

console.log(filtraPar(nums));
console.log(filtraImpar(nums));

console.log(somaNum(nums));
console.log(saldoCompra(dinheiro,lista));
