console.log("Assignment4 Ans8");

/*function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask(" Do you agree?",
     function() {alert("You agreed.");},
     function() {alert("You cancelled the execution.")}
);
*/

let ask = (question, yes, no) => {
    if(confirm(question)) yes()
    else no();
}

ask(" Do you agree?",
     function() {alert("You agreed.");},
     function() {alert("You cancelled the execution.")}
);