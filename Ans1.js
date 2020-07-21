console.log("Assignment5 Ans1");



let pNum = prompt("Enter an positive number.");

let arr = [];

for (let i = 1; i < pNum; i++) {

    arr.push(i);
    
}

console.log(arr);

let odd = arr.filter(el=>el%2!=0);

console.log(odd);

let cube = odd.map(function(el){
             return el**3;
})

console.log(cube);