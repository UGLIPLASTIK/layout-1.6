const modalFeedback = document.getElementById('dialogFeedback');
const modalFeedbackOpen = document.querySelectorAll('.service-button--chat');
const modalFeedbackClose = document.querySelectorAll('.modal-feedback__button');
const modalCall = document.getElementById('dialogCall');
const modalCallOpen = document.querySelectorAll('.service-button--phone');
const content = document.querySelector('.main');
const header = document.querySelector('.header');

for (let i = 0; i <= modalFeedbackOpen.length - 1; i++) {
  modalFeedbackOpen[i].addEventListener('click', () => {
    modalFeedback.showModal();
    content.classList.add('blured');
    header.classList.add('blured');
  })
}

for (let i = 0; i <= modalCallOpen.length - 1; i++) {
  modalCallOpen[i].addEventListener('click', () => {
    modalCall.showModal();
    content.classList.add('blured');
    header.classList.add('blured');
  })
}

for (let i = 0; i <= modalFeedbackClose.length - 1; i++) {
  modalFeedbackClose[i].addEventListener('click', () => {
    modalFeedbackClose[i].parentNode.close();
    content.classList.remove('blured');
    header.classList.remove('blured');
  }) 
}
