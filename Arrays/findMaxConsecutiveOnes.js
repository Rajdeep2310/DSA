let nums = [1, 1, 0, 1, 1, 1]

function main(nums){
    let max = 0
    let currentCount = 0 
    for(let num of nums){
        if(num === 1){
            currentCount++
           if(currentCount > max){
            max = currentCount
           }
        }else {
            currentCount = 0
        }
    }
    console.log(max)
}

main(nums)