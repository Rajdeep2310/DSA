const arr = [1,2,3,10,5,4]
const num = 2
function search(arr,num){
    for(let i =0 ; i< arr.length;i++){
      if(arr[i] == num){
        console.log(`${num} is present in ${i} index.`)
      } 
    }
    console.log(-1)
}

search(arr,num)