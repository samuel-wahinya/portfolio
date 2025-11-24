const progressBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});
