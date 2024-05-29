function validarNombreApellido(nombre, apellido) {
    return nombre.length >= 2 && apellido.length >= 2;
  }
  
  function validarEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }
  
  function register() {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;
  
    if (!validarNombreApellido(nombre, apellido)) {
      alert('El nombre y el apellido deben tener al menos 2 caracteres.');
      return;
    }
  
    if (!validarEmail(email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }
  
    const usuario = {
      nombre: nombre,
      apellido: apellido,
      mail: email,
      contrasena: contrasena
    };
  
    axios.post('/registro', usuario)
      .then(response => {
        alert('¡Registro exitoso!');
        window.location.href = './index.html';
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar. Intente nuevamente más tarde.');
      });
  }
  