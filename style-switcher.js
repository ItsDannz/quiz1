const dayNight = document.querySelector(".day-night");

function applyTheme(isDark){
    if(isDark) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else{
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        applyTheme(true);
    } else{
        applyTheme(false);
    }
});

dayNight.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    applyTheme(!isDark);
});