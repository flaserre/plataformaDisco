const renderSong = (titulo) => {
    const div = document.querySelector('.getSong');

    const newDiv = document.createElement('div');
    newDiv.classList.add('songContainer');

    const title = document.createElement('p');
    title.textContent = `Titulo: ${album1.titulo}`;


    const duration = document.createElement('p');
    duration.textContent = `Duration: ${album1.duracion}`;

    const musicIcon = document.createElement('i');
    musicIcon.classList.add('fas', 'fa-music', 'icon');
    musicIcon.title = 'Play on YouTube';
    musicIcon.addEventListener('click', () => window.open(album1.url, '_blank'));

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash', 'icon');
    deleteIcon.title = 'Delete Song';

    newDiv.appendChild(title);
    newDiv.appendChild(songIndex);
    newDiv.appendChild(duration);
    newDiv.appendChild(musicIcon);
    newDiv.appendChild(deleteIcon);

    div.appendChild(newDiv);
};



    if (album1.length) {
        album1.forEach((titulo) => {
            renderSong(titulo);
        });
    }

    div.appendChild(newDiv);

   

document.addEventListener('DOMContentLoaded', () => {
    fetch('/1989')
        .then(response => response.json())
        .then(album1 => {
            album1.forEach(album1 => {
                renderAlbum(album1);
            });
        })
        .catch(error => {
            console.error('Error al obtener los álbumes:', error);
        });
});


const deleteSong = (id) => {
    const index = album1.findIndex(cancion => cancion._id === _id);

    if (index !== -1) {
        album1.splice(index, 1);

        axios.put('/1989', { album1 })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Canción eliminada exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    location.reload();
                }, 1500);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al eliminar la canción',
                    text: error.message
                });
            });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La canción no pudo ser encontrada'
        });
    }
};
