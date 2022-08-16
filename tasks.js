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


// Square Every Digit
function squareDigits(num){
  var str = String(num).split('').reduce((acc, el) => acc + Number(el) * Number(el), '')
  return parseInt(str)
}

// Remove anchor from URL
function removeUrlAnchor(url){
  // TODO: complete
  var isHash = url.includes('#');
  if(isHash) {
    return url.slice(0, url.indexOf('#'))
  }
  else return url
}

//First non-repeating character

function firstNonRepeatingLetter(s) {
  // Add your code here
  var obj = {};
  
  if(s.length === 1) {
    return s;
  }else if(!s) {
    return '';
  }

    s.toLowerCase().split('').forEach(el => {
        if(el in obj) {
            obj[el] += 1;
        } else {
            obj[el] = 0;
        }
    })
  
  if(Object.keys(obj).length === 1) {
    return ''
  }
  
  var repeats = Object.values(obj);
  if(repeats.every(el => el === 1)) {
    return ""
  }
  
  for(var key in obj) {
    if(obj[key] === 0) {
        var idx =  s[s.toLowerCase().indexOf(key)]
        console.log(idx)
        return idx
    } 
  }
}