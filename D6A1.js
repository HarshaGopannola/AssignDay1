console.log('Assignment6 Ans1');


let colors = ['Orange','Green','Yellow','Black','White'];

for(let i = 0; i < colors.length; i++){

    console.log(colors[i]);
}

const list = document.querySelector('#list');

console.log(list);

colors.forEach(colors=>{
    list.innerHTML += `<li>${colors}</li>`
});


function changeColor(){
    setTimeout(()=>{
        document.body.style.backgroundColor = 'blue';
    }, 5000)
}

changeColor();