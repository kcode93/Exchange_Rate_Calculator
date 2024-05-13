//Scripts Here
function calculate (){
    fetch('items.json').then(function(res){
        console.log(res);
    });
}

calculate();