function isEven (number){
    const remainder = number % 2;
    console.log(remainder);
    if( remainder == 0){
        console.log("This is an EVEN number")
    }
    else{
        console.log("This is an ODD number")
    }
}
isEven(303);
isEven(1206);