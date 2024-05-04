let nombre = prompt ("ingrese su nombre");
let usuario = document.getElementById ("welcome");


while (nombre === null || nombre.length < 3) {
    if (nombre === null) {
        alert("Debe ingresar un nombre");
    } else {
        alert("El nombre es demasiado corto");
    }
    nombre = prompt("Ingrese su nombre nuevamente");
}


let edad = prompt ("ingrese su edad");
let btn = document.getElementsByClassName ("btn");
let i = 0


if (edad < 18){
    swal(
        "No puedes comprar entradas",
        "Debes ser mayor de 18 años para realizar compras", "info",)

    while(i < btn.length ){
        btn[i].style.display = 'none'

        i++
     }
}

nombre = nombre.toUpperCase();
usuario.textContent = "Hola " + nombre;

let tickets = {
    "Paris": 3,
    "Lisboa":3,
    "Madrid":3,
    "Londres":3,
    "Dublin":3,
    "Milan":3
 }



for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(event) {
      let idCiudad = event.target.id;
      if (tickets[idCiudad] > 0) {
        tickets[idCiudad]--;
        swal("Vendido!", "Ya tenes tus tickets para " + idCiudad
        , "success")      } else {
            swal(
                "Sold out",
                "No hay mas tickets para " + 
                idCiudad, "info",
              );      
              event.target.disabled = true;
              event.target.textContent = 'Sold Out';
            }
    });
  }