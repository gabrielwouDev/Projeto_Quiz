const video = document.getElementById("videoPokemon");
const overlay = document.querySelector(".efeitimPreto");

video.addEventListener("ended", () => {
    overlay.classList.remove("hidden");
});