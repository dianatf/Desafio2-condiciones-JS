function clickborde(){
    const imagen  = document.querySelector('#imgborde')

    if (imagen.style.borderColor === 'red' ){

        imagen.style.borderColor ='transparent';
    } else {
        imagen.style.borderColor = 'red';
    }
}