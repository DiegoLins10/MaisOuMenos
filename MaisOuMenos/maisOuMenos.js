//@Author Diego Lins

function maisMenos(array){
    var posi = 0;
    var negativo = 0;
    var zero = 0;
    for(var i = 0; i<array.length; i++){
      if(array[i] == 0){
        zero += 1;
      }else if(array[i] > 0){
        posi += 1;
      }else{
        negativo += 1;
      }
    }
    zero = zero / array.length;
    posi = posi/array.length;
    negativo = negativo/array.length;
    
    var newArray = [posi, zero, negativo];
    return newArray;
  }
  console.log(maisMenos([1, 2, 0, -1]))