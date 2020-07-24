console.log('Assignment2 Ans2');

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        dicaGame: "Two player dice game using JavaScript"
    }
}

let {name, age, projects:{dicaGame}} = student;

console.log(name);
console.log(age);
console.log(dicaGame);

