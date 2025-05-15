
let arr = [1,2,3,4,4,4,5,4,4,4,5,1,5,5,6,7,0]
function remove(arr){
    for(let i = 0 ; i <= arr.length-1 ; i++){
        for(let j= i+1 ; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    console.log(arr)
}


remove(arr)



function removeDups(arr){
    const set = new Set(arr)
    const uniqueArr = Array.from(set)

    for(let i = 0 ; i < uniqueArr.length; i++){
        arr[i] === uniqueArr[i]

    }
    return uniqueArr.length;
}

let k = removeDups(arr)
console.log("The unique elements are:")
for(let j = 0; j < k ; j++ ){
    console.log( arr[i] )
}