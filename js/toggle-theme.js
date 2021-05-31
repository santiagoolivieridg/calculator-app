const checkboxBlue = document.querySelector('input[value=blue]');
const checkboxLight = document.querySelector('input[value=light]');
const checkboxDark = document.querySelector('input[value=dark]');

checkboxBlue.addEventListener('click', function (){
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'blue');
    }
});

checkboxLight.addEventListener('click', function (){
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

checkboxDark.addEventListener('click', function (){
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')}, 1000)
    }