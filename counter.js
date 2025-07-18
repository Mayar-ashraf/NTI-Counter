var counterElement = document.getElementById('counter');
var timeoutMsg = document.getElementById('timeout')
var resetBtn = document.getElementById('rstBtn');
var myInterval;
let repeat = 0;
var time;
var eventName;
resetBtn.style.display = "none";
timeoutMsg.style.display = "none";

function isValidForm(){
    var eventName = document.getElementById('eventName').value;
    var time = document.getElementById('timeRemaining').value;
    if(eventName == ''){
        alert('Event name is a required field!');
        return false;
    }else if(time == ''){
        alert('Time remaining is a required field!');
        return false;
    }else if(Number(time) < 0){
        alert('Please enter an appropriate time!');   
        return false;
    }
    return true;
}

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    if(isValidForm()){
        var nameInput = document.getElementById('eventName');
        var timeInput = document.getElementById('timeRemaining');
        var nameLabel = document.getElementById('nameLabel');
        var timeLabel = document.getElementById('timeLabel');
        var startBtn = document.getElementById('counterBtn');
        var mainLabel = document.getElementById('mainLabel');
        time = timeInput.value;
        eventName = nameInput.value;

        nameLabel.style.display = "none";
        timeLabel.style.display = "none";
        nameInput.style.display = "none";
        timeInput.style.display = "none";
        startBtn.style.display = "none";
        mainLabel.style.display = "none";
        startCounter();
    }
})

function startCounter(){

    console.log(time);
    counterElement.style.color = "cadetblue";
    resetBtn.style.display = "none";
    counterElement.style.display = "inline";

    myInterval = setInterval( function(){
        time --;
        counterElement.innerText = `Time Remaining for Event "${eventName}": ${time} seconds`;
        console.log(time);
        if (time == 3){
            timeoutMsg.innerText = `Almost There!`;
            timeoutMsg.style.display = "block";
            timeoutMsg.style.color = "white";
        }
        if (time == 0){

            console.log("TIME OUT!");
            timeoutMsg.innerText = `FINALLY! \nEvent "${eventName}" has started! ⏰`;
            timeoutMsg.style.display = "block";
            timeoutMsg.style.color= "black";
            resetBtn.style.display = "block";
            counterElement.style.display = "none";
            console.log("myIntervall ",myInterval);
            clearInterval(myInterval);
        }
    }, 1000);
}
resetBtn.addEventListener('click', function(event){

    event.preventDefault();
    resetBtn.style.display = "none";
    timeoutMsg.style.display = "none";
    counterElement.style.display = "none";
    var nameInput = document.getElementById('eventName');
    var timeInput = document.getElementById('timeRemaining');
    var nameLabel = document.getElementById('nameLabel');
    var timeLabel = document.getElementById('timeLabel');
    var startBtn = document.getElementById('counterBtn');   
    var mainLabel = document.getElementById('mainLabel');

    nameLabel.style.display = "inline";
    timeLabel.style.display = "inline";
    nameInput.style.display = "inline";
    timeInput.style.display = "inline";
    startBtn.style.display = "inline";
    mainLabel.style.display = "block";

    nameInput.value = '';
    timeInput.value = '';
    
});