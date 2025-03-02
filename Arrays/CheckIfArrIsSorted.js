// let arr2 = [ 23,1,3,24,52,2,0,0,221]
let arr = [1,2,3,4,5,6,7,3]
function sort(arr){
    let orgArr = [...arr]
    let sortedArr = arr.sort((a,b) => (a - b ))
    if(JSON.stringify(orgArr) === JSON.stringify(sortedArr)){
        console.log("true")
    }else{
        console.log("false")
    }
}

sort(arr);



// Second Method 

// let arr2 = [ 23,1,3,24,52,2,0,0,221]
//let arr = [1,2,3,4,5,6,7,0]

function sort(arr){
    for(let i = 0 ; i <= arr.length-1 ; i++){
        if(arr[i] > arr[i+1]){
            console.log(false)
            return
        }
    }
    console.log(true)
}

sort(arr);