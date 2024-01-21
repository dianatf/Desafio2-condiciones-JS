function contarimg() {
    const contarimg2 = document.querySelector('#countimg2');
    const contarimg3 = document.querySelector('#countimg3');
    const contarimg4 = document.querySelector('#countimg4');

    const valorInput1 = parseFloat(contarimg2.value) || 0;
    const valorInput2 = parseFloat(contarimg3.value) || 0;
    const valorInput3 = parseFloat(contarimg4.value) || 0;

    if (valorInput1 < 0) {
        return valorInput1;

    } 
    else if (valorInput2 < 0) {
        return valorInput2;

    } 
    else if (valorInput3 < 0) {
        return valorInput3;

    } 
    else {
        return valorInput1 + valorInput2 + valorInput3;
    }
}


function validarCantidad() {
    const totalimg = contarimg();
    const msjeResultado = document.querySelector('#msjeResultado');

    if (totalimg >= 0 && totalimg <= 10) {
        msjeResultado.textContent = "El total de imgs es: " + totalimg;
        msjeResultado.style.color = 'black';
    } 
    else {
        msjeResultado.textContent = "Máximo de imgs 10, y llevas: " + totalimg;
        msjeResultado.style.color = 'red';
    }
}