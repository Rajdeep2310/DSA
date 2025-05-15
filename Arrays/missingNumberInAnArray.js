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
