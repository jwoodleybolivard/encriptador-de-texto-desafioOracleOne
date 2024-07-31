// Selección de elementos
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const txtEncriptar = document.querySelector('.texto-encriptar');
const aviso = document.querySelector('.texto-aviso');
const resultado = document.querySelector('.resultado');
const contenido = document.querySelector('.tarjeta-contenedor');
const btnCopiar = document.querySelector('.btn-copiar');

// Función para mostrar mensajes de aviso
function mostrarAviso(mensaje) {
    aviso.style.background = 'white';
    aviso.style.color = 'red';
    aviso.style.fontWeight = '800';
    aviso.textContent = mensaje;
    setTimeout(() => {
        aviso.removeAttribute('style');
    }, 1500);
}

// Función para validar el texto
function validarTexto(texto) {
    const textoLimpio = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if (texto === '') {
        mostrarAviso('El campo de texto no debe estar vacío');
        return false;
    } else if (texto !== textoLimpio) {
        mostrarAviso('No debe tener acentos y/o caracteres especiales');
        return false;
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso('El texto debe ser todo en minúscula');
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encriptar(stringEncriptada) {
    const matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();
    matrizCodigo.forEach(([original, reemplazo]) => {
        stringEncriptada = stringEncriptada.replaceAll(original, reemplazo);
    });
    return stringEncriptada;
}

// Función para desencriptar el texto
function desencriptar(stringDesencriptada) {
    const matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    matrizCodigo.forEach(([original, reemplazo]) => {
        stringDesencriptada = stringDesencriptada.replaceAll(reemplazo, original);
    });
    return stringDesencriptada;
}

// Evento Botón Encriptar
btnEncriptar.addEventListener('click', e => {
    e.preventDefault();
    const texto = txtEncriptar.value;
    if (validarTexto(texto)) {
        resultado.value = encriptar(texto);
        btnCopiar.style.visibility = 'inherit';
        contenido.style.display = 'none';
        txtEncriptar.value = '';
    }
});

// Evento Botón Desencriptar
btnDesencriptar.addEventListener('click', e => {
    e.preventDefault();
    const texto = txtEncriptar.value;
    if (validarTexto(texto)) {
        resultado.value = desencriptar(texto);
        btnCopiar.style.visibility = 'inherit';
        contenido.style.display = 'none';
        txtEncriptar.value = '';
    }
});

// Evento Botón Copiar
btnCopiar.addEventListener('click', e => {
    e.preventDefault();

    // Copiar el texto al portapapeles
    resultado.select();
    document.execCommand('copy');

    // Mostrar el aviso en el botón
    btnCopiar.textContent = 'Texto copiado';
    btnCopiar.style.fontWeight = '600';
    btnCopiar.style.color = '#ffffff';
    btnCopiar.style.backgroundColor = '#0a3871';

    // Configurar el parpadeo del aviso
    setTimeout(() => {
        btnCopiar.style.visibility = 'hidden';
        btnCopiar.style.backgroundColor = ''; // Restaurar el color de fondo original
        btnCopiar.textContent = 'Copiar'; // Restaurar el texto original del botón
        btnCopiar.style.fontWeight = '';
        btnCopiar.style.color = '';
        resultado.value = '';
        contenido.style.display = 'block';
    }, 3000); // Cambiar el aviso después de 3 segundos

    // Ocultar el texto copiado


    // Restaurar el contenido y mostrarlo
});
