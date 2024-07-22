const shareButton = document.getElementById("share-button")
const shareBar = document.getElementById("share-bar");

shareButton.addEventListener("click", () => {
    shareBar.classList.toggle("display-none");
})