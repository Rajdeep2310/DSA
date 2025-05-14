let arr = [3, 4, 6, 7, 9, 12, 16, 17]
let x = 10
function search(arr){
    for(let i=0; i<=arr.length-1;i++){
        if(x === arr[i]){
            console.log(`${arr[i]} is at index ${i}`)
        }        
    }
}
search(arr)