function modal() {
  //MODAL

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector('.modal'),
    phoneInput = document.querySelector('[data-phone]');

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9+()]/ig, '').replace(/(.)\+/g, '$1');
  })

  function openModal() {
    modalTrigger.forEach(item => {
      item.addEventListener('click', (e) => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
      });
    });
  }
  openModal();

  function hideModal(modalWindow) {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = 'visible';
  }


  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      hideModal(modal);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(modal);
    }
  });
}

module.exports = modal;