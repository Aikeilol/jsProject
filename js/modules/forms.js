function forms() {
  //Forms post

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  }

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMassage = document.createElement('img');
      statusMassage.src = message.loading;
      statusMassage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
      // form.append(statusMassage);
      form.insertAdjacentElement('afterend', statusMassage);

      const formData = new FormData(form); //если установлен FormData то нам не нужно setRequestHeader('Content-type', 'multipart/form-data') если отправляем джейсон то нужно request.setRequestHeader('Content-type', 'application/json');

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData(' http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMassage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        })
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class = "modal__content">
        <div class ="modal__close" data-close>×</div>
        <div class ="modal__title">${message}</div>
    </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      hideModal(modal);
    }, 3000);
  }
}

module.exports = forms;