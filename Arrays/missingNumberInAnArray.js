const n = 5;
const arr = [1, 2, 4, 5];

function missing(n, arr) {
  for (let i = 1; i <= n; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(i); // This is the missing number
    }
  }
}

missing(n, arr);


// Easy way 
function main(arr,n){
  let sumArr = 0
  let sumN = 0 
  for(let i=1; i<= n;i++){
    sumN = sumN+i 
  }
  for(let j=0;j<arr.length;j++){
    sumArr = sumArr+arr[j]
  }
    const output = sumN-sumArr
   console.log(output)
  
}

main(arr,n)

// n = n*(n+1)/2
// to sum upto n=5 number such as 1+2+3+4+5 = 15