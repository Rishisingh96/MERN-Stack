const arr = [3, 5, 6, 8, 10, 30, 20, 33];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]); // This prints the value, not the index
  }
}
