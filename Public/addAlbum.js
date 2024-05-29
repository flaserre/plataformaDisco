function getInputValues() {
    const objectToSend = { titulo: "", descripcion: "", ano:"", portada: ""};
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        const key = input.getAttribute('titulo'); 
        const value = input.value;
        if (key && key in objectToSend) {
            objectToSend[key] = value;
        }
    });

    return objectToSend;
}

const albumForm = document.getElementById('formAdd');

albumForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    try {
        await addAlbum(e); 
    } catch (error) {
        console.error("Error:", error);
        swal({
            title: "Error!",
            text: "An error occurred while adding the album.",
            icon: "error",
            confirmButtonText: "Ok",
        });
    }
});