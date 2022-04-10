document.addEventListener("DOMContentLoaded", () => {
    const loaded = document.querySelector(".loader")
    setTimeout(function () {
        loaded.style.opacity = '0'
        setTimeout(function () {
            loaded.style.display = "none"
        }, 500)
    }, 1500)
})