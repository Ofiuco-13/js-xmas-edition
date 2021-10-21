const $form = document.querySelector("#carta-a-santa");

$form.submit.onclick = function () {
  borrarErroresAnteriores();
  validarFormulario();
  return false;
};

function validarFormulario() {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const provincia = $form.provincia.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorProvincia = validarProvincia(provincia);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    provincia: errorProvincia,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  crearMensajeErrores(errores);
  mostrarMensajeExito(errores);
}

function crearMensajeErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });

  let $erroresAnteriores = document.querySelectorAll("#errores li");
  if ($erroresAnteriores.length === 0) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
  }
  return cantidadErrores;
}

function mostrarMensajeExito(errores) {
  const esExito = crearMensajeErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
  }
}

function borrarErroresAnteriores() {
  let $errores = document.querySelectorAll("#errores li");

  if ($errores.length > 0) {
    for (let i = 0; i < $errores.length; i++) {
      $errores[i].remove();
    }
  }
}

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe contener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "Este campo solo acepta letras";
  }
  return "";
}

function validarProvincia(provincia) {
  if (provincia === "") {
    return "Este campo debe contener una provincia";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El campo no puede contener mas de 100 caracteres";
  }

  if (descripcionRegalo.length === 0) {
    return "El campo no puede estar vacio";
  }

  if (!/^[a-z0-9 ]+$/.test(descripcionRegalo)) {
    return "El campo solo puede contener letras y numeros";
  }
  return "";
}
