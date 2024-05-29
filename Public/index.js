let iconos = document.getElementsByClassName ("nofav")
let favoritos = [] 
let i = 0

while (i < iconos.length) {
  iconos[i].addEventListener('click', function() {
    if (this.textContent === '♡') {
      this.textContent = '❤️'; 
    } else {
      this.textContent = '♡';
    }
  });
  i++; 
}



const renderAlbum = (album) => {
  const div = document.querySelector('.getAlbum');
  const newDiv = document.createElement('div');
  newDiv.classList.add('mb-20');
  const img = document.createElement('img');
  img.classList.add('rounded', 'cursor-pointer');
  img.src = album.img ? album.img : 'https://imgur.com/0uSALUr.png';

  div.appendChild(newDiv);
  newDiv.appendChild(img);
  const p = document.createElement('p');
  p.classList.add('text-white', 'text-center', 'text-xl', 'font-bold');
  p.textContent = album.yearOfRelease;
  newDiv.appendChild(p);
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/album')
      .then(response => response.json())
      .then(albums => {
          albums.forEach(album => {
              getAlbum(album._id);
          });
      })
      .catch(error => {
          console.error('Error al obtener los álbumes:', error);
      });
});

const getAlbum = async () =>{
  try{
    const response = await axios.get( `/index.html/${album.titulo}`)
    albumToUse = response.data;
    renderAlbum(albumToUse);
  }
  catch(error){
    swal({
      title: 'Error!',
      text: `${error.response.data}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    redirect('./index.html')
  }
}

const albums = document.querySelectorAll('.getAlbum');

const deleteAlbum = async () => {
  try {
    const response = await axios.delete(`/album/${album[index].dataset.album._id}`);
    swal({
      title: 'Éxito!',
      text: `Borraste ${response.data.title} de la lista`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  } catch (error) {
    swal({
      title: 'Error!',
      text: 'No se pudo eliminar el álbum',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    console.error('Error al eliminar el álbum:', error);
  }
};

const trashIcons = album[index].querySelectorAll('.trash');
trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener('click', deleteAlbum);
});
