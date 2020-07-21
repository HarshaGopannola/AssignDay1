console.log('Assignment4 Ans3');


/* fetch('https://jsonplaceholder.typicode.com/todos').then
(response=>response.json()).then(data=>
    console.log(data));
*/


async function fetchjson(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response;

    console.log(data);
}

fetchjson();