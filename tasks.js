// Factorial
function factorial(n) {
  if(n === 0) return 1;
  if(n == 1) {
    return n
  }
  return n * factorial(n - 1) 
} 

//Sort array by string length
function sortByLength (arr) {
  // Return an array containing the same strings, ordered from shortest to longest
  //return array.sort((a, b) => a.length - b.length);
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length-1; j++) {
        if(arr[j].length > arr[j + 1].length) {
            var temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
        }
      }
    }
  return arr
};
