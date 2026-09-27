const cartas = document.querySelectorAll(".container div");
cartas.forEach(carta => {
    carta.addEventListener("click", (e) => {
        e.stopPropagation();
        cartas.forEach(c => c.classList.remove("ativo"));
        carta.classList.add("ativo");
    });
});

