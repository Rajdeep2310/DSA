// Brute Force :: 
function largestElement(){
    for(let i = 0 ; i <= arr.length; i ++){
        for (let j = 0 ; j < arr.length; j++){
            if(arr[j] < arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr[0])
}

// Optimal Force :: 

function largestElement2(arr){
    let largest = arr[0];
    for(let i = 0 ; i <= arr.length-1; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }
    console.log(largest)
}

let arr = [-21,-1,0,1,2,9,1200,24,33,33,41,314,98]

largestElement(arr)
largestElement2(arr)