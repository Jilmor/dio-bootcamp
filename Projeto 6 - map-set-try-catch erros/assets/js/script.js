function getAdminjr(map){
    let adminjr =[];
    for([key,value] of map){
        if(value === "admin"){
            adminjr.push(key);
        }

    }
    return adminjr;
}
const usuario = new Map();

usuario.set('luiz','admin');
usuario.set('Stefany','admin');
usuario.set('Jorge','user');

console.log(getAdminjr(usuario));

const arrajr = [30,30,40,5,100,223];
function valoresUnicos(arr){
    const myset = new Set(arr);
    return [...myset];
}console.log(valoresUnicos(arrajr));