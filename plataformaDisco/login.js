let submit = document.getElementById("submit");
let mail = document.getElementById("mail");
let contrasena = document.getElementById("contrasena");
let leyenda = document.getElementById("leyenda");

submit.addEventListener("click", function() {
    if (mail.value == "" || contrasena.value == "") {
        swal(
            "Error!",
            "Debes completar todos los campos",
            "error"
        );
    }
});
    contrasena.addEventListener("input", function() {
        
        if (contrasena.value.length < 6 && contrasena.value !== "") {
            leyenda.textContent = "Tu contraseña es demasiado corta"
        }
        else {
            leyenda.textContent = ""
        }
    });