(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    mobileMenu: document.querySelector('.js-menu-container'),
    mobileMenuLinks: document.querySelectorAll('.mobile-menu__link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.mobileMenuLinks.forEach(link => link.addEventListener('click', toggleMenu));

  function toggleMenu() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();
