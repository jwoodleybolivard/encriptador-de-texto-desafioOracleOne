// Selección de elementos
// const btnEncriptar = document.querySelector('.btn-encriptar');
const txtEncriptar = document.querySelector('.texto-encriptar'); //textarea
const aviso = document.querySelector('.texto-aviso');
const resultado = document.querySelector('.resultado'); // mensaje
const contenido = document.querySelector('.tarjeta-contenedor');
const btnCopiar = document.querySelector('.btn-copiar');
// const btnDesencriptar = document.querySelector('.btn-desencriptar');

function btnEncriptar() {
    const textoEncriptado = encriptar(txtEncriptar.value)
    resultado.value = textoEncriptado
    txtEncriptar.value = '';
    contenido.remove();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['s', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(txtEncriptar.value)
    resultado.value = textoEncriptado
    txtEncriptar.value = '';
    contenido.remove();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['s', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }

    return stringDesencriptada
}