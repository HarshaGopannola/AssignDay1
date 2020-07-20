console.log('Assignmnet4 Ans6');

let num;

while(1)
{
num = Number(prompt("Enter a number greater than 100 :"));
if(num < 100)
num = prompt("Enter a number greater than 100: ");
else
{
console.log(`Number entered is ${num}`);
break;
}
}