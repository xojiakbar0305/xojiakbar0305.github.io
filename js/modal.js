var elButton = document.querySelector('.open-modal-button');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

elButton.addEventListener('click', () => {
  modalBg.classList.add('open--modal');
  document.body.addEventListener('keyup', logKeyCode);
}); 

modalClose.addEventListener('click', () => {
  modalBg.classList.remove('open--modal');
  document.body.removeEventListener('keyup', logKeyCode);
});

modalBg.addEventListener('click', (evt) => {
  if (evt.target.matches('.modal-bg')) {
    modalBg.classList.remove('open--modal');
    document.body.removeEventListener('keyup', logKeyCode);
  }
});

var logKeyCode = (evt) => {
  if (evt.code === 'Escape') {
    modalBg.classList.remove('open--modal');
    document.body.removeEventListener('keyup', logKeyCode);
  }
};