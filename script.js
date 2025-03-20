let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');
let themeToggle = document.getElementById('themeToggle');
let themeIcon = document.getElementById('themeIcon');
let body = document.body;

let string = "";
let arr = Array.from(buttons);

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        themeIcon.src = "images/sun.png";  
    } else {
        body.classList.remove('light-theme');
        themeIcon.src = "images/moon.png";  
    }
}

window.onload = function () {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);  
    } else {        
        let systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(systemDark ? 'dark' : 'light');
    }
};

themeToggle.addEventListener('click', () => {
    let newTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);  
});

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string); 
                input.value = string;
            } catch {
                input.value = "Error";  
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
