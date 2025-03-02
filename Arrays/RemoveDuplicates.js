// let arr2 = [ 23,1,3,24,52,2,0,0,221]
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