const shareButton = document.getElementById("share-button")
const darkShareButton = document.getElementById("dark-share-button")
const shareBar = document.getElementById("share-bar");

shareButton.addEventListener("click", () => {
    shareBar.classList.toggle("display-none");

    if (window.innerWidth < 800) {
        darkShareButton.classList.toggle("display-none");   
    }
})

darkShareButton.addEventListener("click", () => {
    shareBar.classList.toggle("display-none");

    if (window.innerWidth < 800) {
        darkShareButton.classList.toggle("display-none");   
    }
})