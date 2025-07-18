var counterElement = document.getElementById('counter');
events = [];
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
        startCounter();
    }
})

function startCounter(){
    
    var nameInput = document.getElementById('eventName');
    var timeInput = document.getElementById('timeRemaining');

    let time = timeInput.value;
    let eventName = nameInput.value;

    var belowForm = document.createElement('h4');
    document.body.appendChild(belowForm);

    nameInput.value = '';
    timeInput.value = '';

    let myInterval = setInterval( function(){
        time --;
        belowForm.innerText = `Time Remaining for Event "${eventName}": ${time} seconds.`;
        belowForm.id= myInterval;
        console.log(time);
        if (time <= 3){
            belowForm.innerText += ` Almost There! ⏰`;
            belowForm.style.color = "white";
        }
        if (time == 0){

            console.log("TIME OUT!");
            alert(`FINALLY! \nEvent "${eventName}" has started! ⏰`);
            belowForm.remove();
        }
    }, 1000);
}