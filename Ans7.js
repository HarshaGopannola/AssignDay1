console.log('Assignment4 Ans7');


for(var limit = 2; limit <= 10; limit++){
    var a = false;
    for(var i = 2; i <= limit; i++ ){
        if(limit % i === 0 && i !== limit){
            a = true;
        }
    }
    if(a === false){
        console.log(limit);
    }
}