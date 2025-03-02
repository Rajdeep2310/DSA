let arr = [ 23,1,3,24,52,2,0,0,221]

function sort(arr){
  let sortedArr = arr.sort((b,a)=> a-b);
  let largest = arr[0];
  for(let i = 0 ; i <= arr.length-1;i++){
       if(arr[i] < largest){
           console.log(arr[i])
           break;
       }
  }
}

sort(arr);