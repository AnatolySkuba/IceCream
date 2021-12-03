(() => {
  const refs = {
    openFormModalBtn: document.querySelector('[data-form-modal-open]'),
    openFormModalBtn2: document.querySelector('[data-form-modal2-open]'),
    closeFormModalBtn: document.querySelector('[data-form-modal-close]'),
    modalForm: document.querySelector('[data-form-modal]'),
  };

  refs.openFormModalBtn.addEventListener('click', toggleModal);
  refs.openFormModalBtn2.addEventListener('click', toggleModal);
  refs.closeFormModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('form-modal-open');
    refs.modalForm.classList.toggle('is-hidden-modal-form');
  }
})();