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

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const provincia = $form.provincia.value;
    const descripcionRegalo  = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorProvincia = validarProvincia(provincia);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        provincia: errorProvincia,
        'descripcion-regalo': errorDescripcionRegalo
    }

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores (errores) {
    
    const keys = Object.keys(errores);

    keys.forEach(function(key) {
        const error = errores[key]

        if (error) {
            $form[key].className = 'error';
        } else {
            $form[key].className = '';
        }
    })

    // errorNombre = errores.nombre;
    // errorProvincia = errores.provincia;
    // errorDescripcionRegalo = errores.descripcionRegalo;

    // if (errorNombre) {
    //     $form.nombre.className = 'error';
    // } else {
    //     $form.nombre.className = '';
    // }

    // if (errorProvincia) {
    //     $form.provincia.className = 'error';
    // } else {
    //     $form.provincia.className = '';
    // }

    // if (errorDescripcionRegalo) {
    //     $form['descripcion-regalo'].className = 'error';
    // } else {
    //     $form['descripcion-regalo'].className = '';
    // }
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;


