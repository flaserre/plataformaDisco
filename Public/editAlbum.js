const editButton = document.getElementById('volverbtn');
editButton.addEventListener('click', changeAlbum);

async function changeAlbum(e) {
    e.preventDefault();
    getInputValues();

    try {
        await axios.put(`/album/${album._id}`, objectToSend); /
        swal({
            title: 'Album edited!',
            text: 'You modified the album!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        window.location.href = `./album.html?id=${album._id}`;
    } catch (error) {
        console.error('Error editing album:', error);
        swal({
            title: 'Error',
            text: 'Failed to edit album. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}
