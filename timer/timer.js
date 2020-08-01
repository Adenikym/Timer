let countdown;

const display= document.getElementById("seconds");
const middle = document.getElementById("mains");
const first = document.getElementById("hours");


function timer (seconds) {
    const now= Date.now();
    const then= now + (seconds*1000)
console.log([now,then])

   
const countdown=setInterval(function () {
    const secondsLeft=  then-Date.now();
    showTime(Math.round(secondsLeft/1000));
    console.log(Math.round(secondsLeft/1000));
    if (secondsLeft<0 ){

        clearInterval(countdown);
        return;
    }
   
    

    
   
    



   
    
}
 ,-1)

    


    
}

function showTime(seconds){
    
    const lowest= Math.floor(seconds/60);
    const minutes=Math.floor( seconds%60);
    const hours= seconds/3600;
    display.innerHTML=minutes;
    middle.innerHTML=lowest;
    
}






    const five=document.getElementById("five").addEventListener("click", function(){
        return timer(300)
    });
    const thirty=document.getElementById("thirty").addEventListener("click",function(){
        return timer(1800)
    });
    const quarter = document.getElementById("forty-five").addEventListener("click", function() {
        return timer(2700)
    });
    const high= document.getElementById("high").addEventListener("click", function() {
        return timer(4000)
    });

    function varyTime(e) {
        e.preventDefault();
        const input=document.getElementById("enter").addEventListener("submit", function () {
        
        return timer(enter.value)
        })    
    }

    