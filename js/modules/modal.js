function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';

}

function hideModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = 'visible';
}

function modal(triggerSelector, modalSelector) {
  //MODAL

  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    phoneInput = document.querySelector('[data-phone]');

  modalTrigger.forEach(item => {
    item.addEventListener('click', () => openModal(modalSelector));
  });

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9+()]/ig, '').replace(/(.)\+/g, '$1');
  })

  openModal(modalSelector);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      hideModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(modalSelector);
    }
  });
}

export default modal;
export { hideModal };
export { openModal };