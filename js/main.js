const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;

const provincia = $form.provincia.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo  = $form['descripcion-regalo'].value;

function validarNombre (nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe contener al menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return 'Este campo solo acepta letras';
    }
    return '';
}

function validarProvincia (provincia) {
    if (provincia === '') {
        return 'Este campo debe contener una provincia';
    } 
    return '';
}

function validarDescripcionRegalo (descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return 'El campo no puede contener mas de 100 caracteres';
    }

    if (descripcionRegalo.length === 0) {
        return 'El campo no puede estar vacio';
    }

    if (!/^[a-z0-9]+$/.test(descripcionRegalo)) {
        return 'El campo solo puede contener letras y numeros';
    }
    return '';
}



