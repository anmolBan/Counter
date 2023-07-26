var button = document.getElementById('button');
var current = document.querySelector('.current');
var next = document.querySelector('.next');
var number = document.getElementById('number');

var bool = false;

var val;
var val2;
var id;
var bool2 = false;
function timer(){
    if(val > -1){
        next.innerText = val;
        setTimeout(function(){
            current.innerText = val;
            val--;
        }, 500);
        next.classList.add('animate');
        setTimeout(function(){
            next.classList.remove('animate');
        }, 500)
        
    }
    else{
        clearInterval(id);
        bool2 = false;
        val = val2;
        alert("Time's up!!!");
    }
}
number.addEventListener('input', function(){
    val = number.value;
});

button.addEventListener('click', function(){
    if(!bool2){
        val2 = val;
        timer();
        id = setInterval(timer, 1000);
        bool2 = true;
    }
});