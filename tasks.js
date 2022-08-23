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

// Convert string to camel case
function toCamelCase(str){
  //string = "the-stealth-warrior"
 let sw = false;
 
 return str.split('').reduce((acc, el) => {
     if(el === '-' || el === '_') {
         sw = true;
     } else {
        acc += sw ?  el.toUpperCase() : el;
        sw = false;
     }
     return acc;
 },'')
}

// Equal Sides Of An Array
function findEvenIndex(arr) {
  var sum = (arr) => arr.reduce((acc, el) => acc + el, 0)
  return arr.findIndex((_, i) => sum(arr.slice(0, i)) === sum(arr.slice(i + 1)))
}

// Who likes it?
function likes(names) {
  // TODO
  if(names.length === 0) return 'no one likes this'
  if(names.length === 1) return names[0] + ' likes this' 
   if(names.length === 2) return names[0] +' and '+ names[1]+ ' like this' 
  if(names.length === 3)return  `${names[0]}, ${names[1]} and ${names[2]} like this`
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}



// Anagram v2
function count_letters(word) {
  word = word.toLowerCase()
  let result = {}
  for (let char of word) {
      if (result[char]) result[char] += 1;
      else result[char] = 1;
  }

  return result
}

function are_counters_equal(left, right) {
  for (let key in left) if(left[key] !== right[key]) return false;

  return true;
}

function isAnagram(left, right) {
  if(left.length !== right.length) return false;
  left_word_counter = count_letters(left)
  right_word_counter = count_letters(right)
  return are_counters_equal(left_word_counter, right_word_counter)
}

// Find the unique number

function findUniq(arr) {
  // do magic
    const obj = arr.reduce((obj, el) => {
        if(!obj[el]) obj[el] = 1;
        else obj[el] += 1;
        return obj;
    },{})
  
    for(let key in obj) {
        if(obj[key] === 1) return Number(key)
    }   
}

// Two to One
function longest(s1, s2) {
  // your code
  return[...new Set(s1+s2)].sort().join('')
}

//Enumerable Magic #3 - Does My List Include This?
function include(arr, item){
  // ...
  return arr.includes(item)
}

// Odd or Even?
function oddOrEven(array) {
  //enter code here
 if(!array.length) return 'even'
 return array.reduce((acc, el) => acc + el, 0) % 2 === 0 ? 'even' : 'odd'
}

// The highest profit wins!

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}

// Form The Minimum
function minValue(values){
  return Number([...new Set(values)].sort((a, b) => a - b).join(''));
}

// factorial once more
function factorial(n) {
  // Calculate the factorial here
  if(n === 0 || n === 1) return 1;
  if(n < 0 || n > 12) throw new RangeError;
  var fc = 1;
    while(n > 1) {
        fc *= n;
        n--;
    }
    return fc;
}

// Alan Partridge II - Apple Turnover
function apple(x){
  if(Math.pow(x, 2) > 1000) return `It's hotter than the sun!!`
  return `Help yourself to a honeycomb Yorkie for the glovebox.`
}


//Flatten and sort an array

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.reduce((acc, el) => {
      while(el.length) acc.push(el.pop())
      return acc;
  },[]).sort((a, b) => a - b)
}

// Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))]
}

//Regular Ball Super Ball
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

// String Clean
function stringClean(s){
  if(!s) return ''
  return s.split('').filter(el => isNaN(parseInt(el))).join('')
  //return s.match/replace(/[^1-9]/g).join('')
  //match return null if string empty
}

// double Char
function doubleChar(str) {
  // Your code here
  return str.split('').reduce((acc, el) => acc + el + el, "");
} 

// Find the capitals
var capitals = function (word) {
  // Write your code here
  return word.split('').map((el, ind) => {
    if(el.charCodeAt() <= 65 || el.charCodeAt() <= 90) {
        return ind
    }
    return;
  }).filter(el => !isNaN(el)) 
};

// All Star Code Challenge
function strCount(str, letter){  
  //code here
  var count = 0;
  for(var l of str) if(l === letter) count++;
  return count;
  //return str.split(letter).length - 1;
}
//removeSmallest
function removeSmallest(numbers) {
  //throw "TODO: removeSmallest";
  if(!numbers.length) return []
  var idxOfminNum = numbers.indexOf((Math.min(...numbers)))
  return [...numbers.slice(0, idxOfminNum), ...numbers.slice(idxOfminNum + 1)]
} 

// Reverse words
function reverseWords(str) {
  // Go for it
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

//Shortest Word
function findShort(s){
  return Math.min(...s.split(' ').map(el=>el.length));
}
// Find the stray number
function stray(numbers) {
  var obj = numbers.reduce((acc, el) => {
    if(!acc.hasOwnProperty(el)) acc[el] = 0; 
    else acc[el] += 1;
    return acc;
  },{})
  
  for(var key in obj) if(obj[key] === 0) return parseInt(key);
  // Number(numbers.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)))
}

// Trinagle
function isTriangle(a,b,c) {
  return (a + b > c && a + c > b && b + c > a) 
}

// doMath
function doMath(s) {
  //your code here
 let letters  = '', numbers = '';  
 //numbers = s.split('').filter(el => !isNaN(el)) 
 //letters = s.split('').filter(el => isNaN(el))
 
 for(let key of s) isNaN(key) ? letters += key : numbers += key; 
  
 // let structure = numbers.join('').split(' ')
 //    .map((el, idx) => [Number(el), letters[idx]])
 //  //sort
 //  structure.sort((a, b) => a[1].localeCompare(b[1]))

//***
  const structure = 
    numbers
    .split(' ')
    .map((el, idx) => [Number(el), letters[idx]])
    .sort((a, b) => a[1].localeCompare(b[1]));
//*** 

  function calculateResult(data) {
    let countOper = 0;
    const oper = ['+', '-', '*', '/'];

    return Math.round(data.slice(1).reduce((acc, num) => {
      if(countOper === oper.length) countOper = 0;

      if(oper[countOper] == '+') {
          acc += num[0]
      }
      if(oper[countOper] == '-') {
          acc -= num[0]
      }
      if(oper[countOper] == '*') {
          acc *= num[0]
      }
      if(oper[countOper] == '/') {
          acc /= num[0]
      }

      countOper++;
      return acc;
    }, structure[0][0]))
  }

  return calculateResult(structure);
    
}


// Vowel Count
function getCount(str) {
  //return str.split('').filter(el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u').length

  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }
 
//Highest and Lowest
function highAndLow(numbers){
  // ...
  console.log(numbers)
  return [Math.max(...numbers.split(' ')) , Math.min(...numbers.split(' '))].join(' ')

}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
};

// checkExam
function checkExam(a, b) {
  //debugger
  var points = 0;

  a.forEach((el, idx) => {
      if(el === b[idx]) points += 4;
      else if(el && b[idx] !== '') points -= 1;
      else points -= 0  
  })
  
  return points < 0 ?  0 : points;
}


//
function wave(str = ' gap ') {
  var result = [];
  
  var isSpace = false;
  if(str[0] === ' ') {
      str = str.trim();
      isSpace = !isSpace;
  }
  
  for(var i = 0; i < str.length  ; i++) {
      var strArr = str.split('');
          if(str[i] === ' ') {
              i += 1;
              strArr[i] = str[i].toUpperCase();
              console.log(str[i])
              result.push(strArr.join(''))
          } 
           else {
              strArr[i] = str[i].toUpperCase();
              result.push(strArr.join(''))
           }
  }
  return isSpace ? result.map(el => ' ' + el + ' ') : result; 
}

// Wave
function wave(str) {
  const mass = [];
  for(let i = 0; i < str.length; i++) {
      let copy = str.slice().split('');
      if(str[i] === ' ') continue;   
      copy[i] = str[i].toUpperCase();
      mass.push(copy.join(''))
  }
  return mass;
}