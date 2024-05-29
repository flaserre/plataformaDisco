let album;
const newSong = {};
let albumId;

const getAlbum = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        albumId = params.get('album');

        const { data } = await axios.get(`/album/${albumId}`);
        album = data.data;
    } catch (error) {
        console.error(error);
    }
};

const addSong = async (e) => {
    e.preventDefault();
    const titulo = document.querySelector('input[name="Título"]').value;
    const minutos = document.querySelector('input[name="Minutos:"]').value;
    const segundos = document.querySelector('input[name="Segundos:"]').value;
    const link = document.querySelector('input[name="Link"]').value;

    if (titulo && minutos && segundos && link) {
        const nuevaCancion = {
            titulo: titulo,
            duracion: `${minutos}:${segundos}`,
            link: link
        };

        album.canciones.push(nuevaCancion);

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
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No fue posible añadir la canción'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor completa todos los campos'
        });
    }
};

document.querySelector('form').addEventListener('submit', addSong);
document.querySelector('input[type="button"]').addEventListener('click', () => {
    window.location.href = `/album/${albumId}`;
});
