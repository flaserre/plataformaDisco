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
