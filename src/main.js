var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
let angularIcon = document.getElementById('angular');

function dark(){
    angularIcon.src = "./img/angular.svg";
}

function light(){
    angularIcon.src = "./img/angular_solidBlack.svg";
}

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            dark();
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            light();
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            light();
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            dark();
        }
    }
    
});

themeToggleBtn.addEventListener('mouseover', () => {
    themeToggleBtn.firstElementChild.classList.remove('fill-slate-100')
    themeToggleBtn.lastElementChild.classList.remove('fill-slate-100')
    themeToggleBtn.firstElementChild.classList.add('fill-slate-800')
    themeToggleBtn.lastElementChild.classList.add('fill-slate-800')
});
themeToggleBtn.addEventListener('mouseleave', () => {
    themeToggleBtn.firstElementChild.classList.add('fill-slate-100')
    themeToggleBtn.firstElementChild.classList.remove('fill-slate-800')
    themeToggleBtn.lastElementChild.classList.add('fill-slate-100')
    themeToggleBtn.lastElementChild.classList.remove('fill-slate-800')
});