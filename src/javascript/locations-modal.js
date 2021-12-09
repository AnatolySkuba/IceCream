(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-locations-modal-open]'), openModalFranchiseBtn: document.querySelector('[data-franchise-modal-open]'), closeModalBtn: document.querySelector('[data-locations-modal-close]'),
        modal: document.querySelector('[data-locations-modal]'),
    };
refs.openModalBtn.addEventListener('click', toggleModal);
refs.openModalFranchiseBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
    toggleModal();
    } 
});
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();