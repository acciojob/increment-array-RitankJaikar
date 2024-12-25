function incrementArray(arr) {
  // Use the map() function to create a new array with incremented values
  return arr.map(num => num + 1);
}

// Test the function
let arr = [1, 2, 3, 4, 5];
alert(incrementArray(arr));  // [2, 3, 4, 5, 6]
