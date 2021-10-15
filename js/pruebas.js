function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe contener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('asda123123123') === 'Este campo solo acepta letras',
      'Validar nombre no valido que el nombre solo tenga letras'
  );

  console.assert(
      validarNombre('Emmanuel') === '',
      'validarNombre no funciono con un nombre valido'
  );
}

function probarValidarProvincia() {
    console.assert(
        validarProvincia('') === 'Este campo debe contener una provincia',
        'validarProvincia no mosotro el mensaje de completar campo con una provincia' 
    );

    console.assert(
        validarProvincia('Rio Negro') === '',
        'validarProvincia no funciono con un nombre de provincia valido'
    );
}

function probarValidarDescripcionRegalo () {
    console.assert(
        validarDescripcionRegalo('') === 'El campo no puede estar vacio',
        'validarDescripcionRegalo no valido que el campo no pueda ser vacio'
    );

    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        === 'El campo no puede contener mas de 100 caracteres',
        'validarDescripcionRegalo no valido que el campo no pueda contener mas de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('Quiero un laburo') === '',
        'validarDescripcionRegalo no funciono con una descripcion de regalo valida'
    );
}

probarValidarNombre();
probarValidarProvincia();
probarValidarProvincia();
