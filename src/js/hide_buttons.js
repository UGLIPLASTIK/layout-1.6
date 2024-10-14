const hideButtons = document.querySelectorAll('.main__button');

for (let i = 0; i < hideButtons.length; i++) {
  hideButtons[i].addEventListener('click', () => {
    hideButtons[i].closest('#block').querySelector('.wrapper').classList.toggle('wrapper--folded');
    hideButtons[i].classList.toggle('unfolded');
    if (hideButtons[i].classList.contains('unfolded')) {
      hideButtons[i].textContent = 'Скрыть';
    } else {
      if (hideButtons[i].closest('.main__text')) {
        hideButtons[i].textContent = 'Читать далее';
      } else hideButtons[i].textContent = 'Показать все';
    }
  })
}


