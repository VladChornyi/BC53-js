const listRef = document.querySelector('.js-accordion-list');

function handleBtnClick(event) {
  if (event.target.classList.contains('js-accordion-btn')) {
    event.target.nextElementSibling.classList.toggle('active');
  }
}

listRef.addEventListener('click', handleBtnClick);
