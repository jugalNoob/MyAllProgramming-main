const add=(a ,b)=>{

    return a +b
}

const mult=(a ,b)=>{

    return a * b

}
const calu=(num1 , num2 , operat)=>{

    return operat(num1 , num2)
}


console.log(calu(5 , 5  ,add))
console.log(calu(5 , 5  ,mult))