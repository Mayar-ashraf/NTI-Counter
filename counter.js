var counter;
var counterElement = document.getElementById('counter');
var timeoutMsg = document.getElementById('timeout')
var resetBtn = document.getElementById('rstBtn');
var myInterval;
let repeat = 0;

resetBtn.style.display = "none";
timeoutMsg.style.display = "none";

startCounter();

function startCounter(){
    counterElement.innerText = '';
    counter = prompt("Enter your counter value in seconds please!");
    while(Number(counter) < 0){
        counter = prompt("Enter a proper time value please");
    }
    counterElement.style.color = "green";

    myInterval = setInterval( function(){
        counter --;
        counterElement.innerText = `${counter} SECONDS LEFT.`;
        console.log(counter);
        resetBtn.style.display = "none";

        if (counter == 0){

            console.log("TIME OUT!");
            timeoutMsg.innerText = "TIME OUT!";
            timeoutMsg.style.display = "block";
            resetBtn.style.display = "block";
            counterElement.style.color = "black";
            console.log("myIntervall",myInterval);
            clearInterval(myInterval);
        }
    }, 1000);
}
resetBtn.addEventListener('click', function(){
    resetBtn.style.display = "none";
    timeoutMsg.style.display = "none";
    startCounter();
});
resetBtn.addEventListener('mouseover', function(){
    resetBtn.style.backgroundColor = "rgb(168, 244, 247)";
});
resetBtn.addEventListener('mouseout', function(){
    resetBtn.style.backgroundColor = "darkcyan";
});