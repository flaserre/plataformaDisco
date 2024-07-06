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
    const titulo = document.querySelector('input[name="Título"]').value;
    const ano = document.querySelector('input[name="Año de lanzamiento:"]').value;
    const descripcion = document.querySelector('input[name="Descripción"]').value;
    const img = document.querySelector('input[name="Imagen"]').value;

    if (titulo && ano && descripcion && img) {
        const nuevoAlbum = {
            titulo: titulo,
            descripcion: descripcion,
            ano: ano,
            portada: img
        };

        album.canciones.push(nuevoAlbum);

        try {
            await axios.put(`/album/${albumId}`, album);
            Swal.fire({
                icon: 'success',
                title: 'Canción añadida exitosamente',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = `/album/${albumId}`;
            });
    } catch (error) {
        console.error("Error:", error);
        swal({
            title: "Error!",
            text: "An error occurred while adding the album.",
            icon: "error",
            confirmButtonText: "Ok",
        });
    }
}});