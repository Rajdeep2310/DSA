function SelectionSort(arr){
    for(let i = 0 ; i < arr.length-1; i++){
        let mini = i  ; 
        for(j = i +1; j < arr.length; j++){
            if(arr[j]< arr[mini]){
                mini = j ;
            }
        }
        [arr[i], arr[mini]] = [arr[mini],arr[i]]
    }
    console.log(arr)
}

let arr = [ 1, 2,33,41,33,12,314,24,9,-1,0,-21]
SelectionSort(arr)