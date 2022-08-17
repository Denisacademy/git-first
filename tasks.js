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