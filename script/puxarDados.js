const resultados = JSON.parse(sessionStorage.getItem('resultados'));
document.getElementById('p1').value = resultados.pergunta1.texto;
document.getElementById('p2').value = resultados.pergunta2.texto;
document.getElementById('p3').value = resultados.pergunta3.texto;
document.getElementById('p4').value = resultados.pergunta4.texto;
document.getElementById('p5').value = resultados.pergunta5.texto;

let btn = document.getElementById('botao-confirmacao')
btn.addEventListener('click',telaFinal)
