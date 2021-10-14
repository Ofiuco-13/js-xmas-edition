const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
//nombre = document.querySelector('[name = nombre]').value;
//nombre = document.querySelector('#nombre').value;

const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo  = $form['descripcion-regalo'].value;

function validarNombre (nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe contener al menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return '';
} 

function validarCiudad () {
    if (ciudad.value === '') {
        return 'Debe seleccionar una provincia';
    }
}
