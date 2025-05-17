// Example 1:
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

const arr = [ 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
function main(arr){
  let newArr=[]
    for(let i =0 ; i < arr.length ; i++){
      if(arr[i] != 0){
        newArr.push(arr[i])
      }
    }
    for(let j =0;j<arr.length;j++){
      if(arr[j] === 0){
        newArr.push(arr[j])
      }
    }
    console.log(newArr)
}

main(arr)