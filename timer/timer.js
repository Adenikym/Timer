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


timer(120);

