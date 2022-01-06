function validaArray(arr,nv){
    try{if(!arr && !nv) throw new ReferenceError("Envie os paramentros,para de avacalhar");
    if(typeof arr !== "object") throw new TypeError("O array precisa ser do tipo Object");
    if(typeof arr !== "number") throw new TypeError("O array precisa ser do tipo Number");
    if(arr.length !== nv) throw new RangeError("Tamanho Invalido");
    return arr;
}
    catch(e) { 
        if(e instanceof ReferenceError){
            console.log('Este erro é um referenceerror');
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log('Este erro é um erro de tipo');
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log('Este erro de tamanho do Array');
            console.log(e.message);
        } else{
            console.log('Este erronão está cadastrado, fizesse merda');
        }
    }
    

} console.log(validaArray());
  console.log(validaArray(3,3));
  console.log(validaArray(3,"a"));
  console.log(validaArray([34,56,78,98],2));
  console.log(validaArray([34,56], 2));
