console.log('Assignment6 Ans 3');


/*function changeColor(){
    setTimeout(()=>{
        document.body.style.backgroundColor = 'black';
    }, 3000);
}

changeColor();*/

const name  = prompt('Enter your Name');

title.innerText += `Welcome to my First  WEB  page ${name}`;


const dmode = document.getElementById('Dark');

dmode.onclick = function changeColor(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}