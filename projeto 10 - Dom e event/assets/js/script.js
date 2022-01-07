const botaoM = document.getElementById('mode-selector');
const head1 = document.getElementById('page-title');
const bodyW = document.getElementsByTagName('body')[0];

const lightmode = "Light Mode";
    const darkmode = "Dark Mode";
    const darkModeClass = "dark=mode";

function changeMode(){
    console.log("!mudei");
    changeClasses();
    changeText();
}
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}
function changeTex(){
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightmode;
        h1.innerHTML = darkmode + " ON";
        return;
    }
    button.innerHTML = darkmode;
    h1.innerHTML=lightmode + " on";
}

botaoM.addEventListener('click',changeMode);
head1.addEventListener('mouseover',changeMode);
bodyW.addEventListener('load',changeMode);