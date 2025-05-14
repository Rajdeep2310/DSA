let num = 1234
function countDigit(num){
    let newNum = 0 
    while( num > 0){
        num = num%10
        newNum++
    }
    console.log(newNum)
}

countDigit(num)

