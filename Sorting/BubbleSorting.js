function BubbleSort(arr){
    for(let i = 0 ; i<= arr.length-1; i++){
        for(let j = 0 ; j < arr.length;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
}
let arr = [ 1, 2,33,41,33,12,314,24,9,-1,0,-21]
BubbleSort(arr)