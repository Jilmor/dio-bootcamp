
//Solução 1 da Professora
function verificaStringJr(strings) {
    if (!strings) return;
    return strings.split("").reverse().join("") === strings;
}   

//Solução 2 da Professora
function verificaStringJr2(strings) {
    if (!strings) return "String inexistent";

    for (let i = 0; i < strings.length /2; i++) {
        if(strings[i] !== strings[strings.length -1 - i]) return false; 
    }
    return true;
}
console.log(verificaStringJr("ana"));
console.log(verificaStringJr("carlos"));
console.log(verificaStringJr(""));
console.log(verificaStringJr2("ana"));
console.log(verificaStringJr2("carlos"));
console.log(verificaStringJr2(""));

