function calcular() {
    let num = Number(window.prompt('Digite um número:'));
    let res = document.getElementById('resultado');
    if(num % 2 === 0) {
        res.innerHTML = `O número ${num} é par!`;
    } else {
        res.innerHTML = `O número ${num} é ímpar!`;
    }
}