/* There are many types of string Methods */

var stringone = 'My name is Harsha.';
var  stringtwo = "I joined letsupgrade."

// charAt()
console.log(stringone.charAt(5));

// concat()
console.log(stringone.concat(stringtwo));

// endsWith()
console.log(stringone.endsWith('Harsha.'));

// repeat()
console.log(stringone.repeat(2));

// replace()
console.log(stringone.replace(/Harsha/g, 'Gopannola'));

//There are many other strings.


// Follow are array methods

var arr = ['a', 'b', 'c'];

// push()
arr.push('d');
console.log(arr);

//pop()
console.log(arr.pop());
console.log(arr);

// concat()

var arr2 = ['g', 'f'];

console.log(arr.concat(arr2));

// reverse()

console.log(arr.reverse());

//shift()

console.log(arr.shift());
console.log(arr);

// sort()

console.log(arr.reverse());

arr.push('i', 'w', 'r');
console.log(arr.push());

console.log(arr);

console.log(arr.sort());

// slice()

console.log(arr.splice(1, 3, 'Letsupgrade'));
console.log(arr);