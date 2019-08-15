// Make focused clicked day div
function toggleOpen() {
    document.querySelectorAll('.item').forEach(x => {
        if (x.classList.contains('open')) {
            x.classList.toggle('open'); 
        }
    })
    this.classList.toggle('open');
    changeImage(this);
}
// Change Routine Image on click each day div
function changeImage(div) {
    let image = document.querySelector('.content img');
    let string = div.classList[1].toString();
    let current_day = string[string.length -1];
    image.src = "media/routine/routine_"+current_day+"_2.jpg";
}

// Make animation on showing text to day div
function toggleActive(e) {
    if(e.propertyName.includes('grow')) {
        this.classList.toggle('open-active');
    }
}

// Clicking on button for subscribing
function subscribe() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    let option = document.getElementById("select");
    const lvl = option.options[option.selectedIndex];
    tmp(name.value, email.value, lvl.value);
    name.value = "";
    email.value = "";
    option.selectedIndex = 0;
}
function tmp(name, email, lvl) {

    let reportFile = new File([""], "../subscribers.txt");
    let reportText = name + " | " + email + " | "+lvl + "\n";

    alert(reportText); // print in file...

}

// Setting current day focused
function setDay() {
    let n = new Date().getDay();
    let div = document.querySelector(".item"+n);
    div.classList.add("open");
    div.classList.add("open-active");

    let image = document.querySelector('.content img');
    image.src = "media/routine/routine_"+n+"_2.jpg";
}
// On loaded document...
function start() {
    setDay();

    // Click chose for each day
    items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('click', toggleOpen));
    items.forEach(item => item.addEventListener('transitionend', toggleActive));

    // Submit button animation
    let submit = document.querySelector('.submit'),
        msg1 = document.querySelector('.state1'),
        msg2 = document.querySelector('.state2'),
        msg3 = document.querySelector('.state3');
    const updateButtonMsg = function() {
        const isValidEmail = email.checkValidity();
        if (!isValidEmail) {
            return;
        }
        msg1.classList.add('active');
        msg2.classList.remove('active');
    
        setTimeout(finalButtonMsg, 2000);
    };
    const finalButtonMsg = function() {
        msg2.classList.add('active');
        msg3.classList.remove('active');
    
        setTimeout(setInitialButtonState, 2000);
    };
    const setInitialButtonState = function() {
        msg3.classList.add('active');
        msg1.classList.remove('active');
        subscribe();
    };
    submit.addEventListener('click', updateButtonMsg);
}
// On loaded document
document.addEventListener('DOMContentLoaded', start);


function loaded() {
    let loading = document.querySelector('.loading');
    loading.setAttribute("style", "opacity: 0;");
    setTimeout(() => {
        loading.setAttribute("style", "display: none;");
    }, 1000);
    let logo = document.querySelector('nav img');
    logo.setAttribute("style", "transform: rotate(" + 360 + "deg)");
    let text = document.querySelectorAll('nav span');
    text.forEach(item => item.setAttribute("style", "font-size: 30px;"));
}
window.addEventListener("load", loaded);


// Guide on hover Routine Image
function showGuide() {
    document.querySelector('.content > *:last-child').setAttribute("style", "opacity: 1;");
}
function hideGuide() {
    document.querySelector('.content > *:last-child').setAttribute("style", "opacity: 0;");
}