const menu = document.getElementById('icon');
const links = document.getElementById('links');

window.addEventListener("resize", () => {
    if(window.innerWidth >= 768) {
        let show = document.getElementsByClassName('show');
        for (let i = 0; i < show.length; i++) {
            show[i].style.left = "-100%";
        }
        links.classList.remove('show')
    }
});

menu.addEventListener("click", (e) => {
    e.preventDefault();
    let show = document.getElementsByClassName('show');
    if(links.classList.contains('show')) {
        for (let i = 0; i < show.length; i++) {
            show[i].style.left = "-100%";
        }
        links.classList.remove('show');
    } else {
        links.classList.add('show');
        for (let i = 0; i < show.length; i++) {
            show[i].style.left = "0";
        }
    }
});