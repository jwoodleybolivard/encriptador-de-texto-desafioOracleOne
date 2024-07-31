// Selección de elementos
const btnEncriptar = document.querySelector('.btn-encriptar');
const txtEncriptar = document.querySelector('.texto-encriptar');
const aviso = document.querySelector('.texto-aviso');
const resultado = document.querySelector('.resultado');
const contenido = document.querySelector('.tarjeta-contenedor');
const btnCopiar = document.querySelector('.btn-copiar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');

// Evento Botón Encriptar
btnEncriptar.addEventListener('click', e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == '') {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacío';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else if (texto !== txt) {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'No debe tener acentos y/o caracteres especiales';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'El texto debe ser todo en minúscula';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else {
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');

        resultado.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit';
        contenido.remove();
    }


});

// Boton desencriptar
btnDesencriptar.addEventListener('click', e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == '') {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacío';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else if (texto !== txt) {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'No debe tener acentos y/o caracteres especiales';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = 'white';
        aviso.style.color = 'red';
        aviso.style.fontweight = '800';
        aviso.textContent = 'El texto debe ser todo en minúscula';

        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500)
    }

    else {
        texto = texto.replace(/enter/mg, 'e');
        texto = texto.replace(/imes/mg, 'i');
        texto = texto.replace(/ai/mg, 'a');
        texto = texto.replace(/ober/mg, 'o');
        texto = texto.replace(/ufat/mg, 'u');

        resultado.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit';
        contenido.remove();
    }


});

// Boton copiar
btnCopiar.addEventListener('click', e => {
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand('copy');
});