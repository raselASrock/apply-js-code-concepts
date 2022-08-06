function getOddNumbersOfAnArrey(numbers){
    const oddNumbers = [];
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if( element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 85, 35, 94, 76, 64, 63];
const oddNumbers = getOddNumbersOfAnArrey(myNumbers);
console.log(oddNumbers);
