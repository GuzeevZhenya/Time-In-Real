const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector("#focus");
const MIN_LENGTH = 13;
const showAmPm = true;
//Показываем время
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    //12 Часовой формат
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ''}`;
}   
setInterval(showTime, 1000);


function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
    let hour = new Date().getHours();
    document.body.style.backgroundSize = 'cover';
    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {

        document.body.style.backgroundImage = "url('img/afternoon2.jpg')";
        greeting.textContent = 'Good afternon';
        //Afternoon
    } else {
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        greeting.textContent = 'Good Evening';
        // Evening
    }
}

// Get Name
function getName() {
    name.value = localStorage.getItem('name');
}

//Set Name
function setName(e) {
    const target = e.target;
    if (e.type === 'keypress') {
        if (e.wich == MIN_LENGTH || e.keyCode == MIN_LENGTH) {
            localStorage.setItem('name', target.value);
            name.blur();
        }
    } else {
        localStorage.setItem('name', target.value);
    }
}

// Get Focus
function getFocus() {
    focus.value = localStorage.getItem('focus');
}

// Set Focus
function setFocus(e) {
    const target = e.target;
    if (e.type === 'keypress') {
        if (e.keyCode === MIN_LENGTH) {
            localStorage.setItem('focus', target.value);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', target.value);
    }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

getName();
getFocus();
 
setBgGreet();