function getFactorial(number){
    let result = 1;
    for( let i = 1; i <= number; i++){
        result = result  *  i
    }
    return result;
}

const result = getFactorial(8);
console.log(result);