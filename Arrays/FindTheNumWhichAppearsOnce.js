// Example 1:
// Input Format: arr[] = {2,2,1}
// Result: 1
// Explanation: In this array, only the element 1 appear once and so it is the answer.

const arr = [1,2,3,3,2]
function main(arr){
    for(let i =0; i< arr.length;i++){
      let count = 0; 
      for(let j=0;j<arr.length;j++){
        if(arr[i] === arr[j]){
             count++
          //console.log(arr[i],count)
        }
      }
      if(count === 1){
        console.log(arr[i])
      }
    }
}

main(arr)



let nums = [2,2,1]

function main(nums){
  let countMap = {}
  for(let num of nums){
    if(countMap[num]){
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }
  for(let key in countMap){
    if(countMap[key] === 1){
      console.log(countMap[key])
    }
  }
}

main(nums)