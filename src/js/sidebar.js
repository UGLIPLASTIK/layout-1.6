const openSidebarButton = document.querySelector('.service-button--burger');
const sidebar = document.querySelector('.aside');
const closeSidebarButton = sidebar.querySelector('.service-button--close');
const content = document.querySelector('.main');
const body = document.querySelector('body');
const header = document.querySelector('.header');

const setSidebar = function() {
  if (body.offsetWidth > 1439) sidebar.classList.remove('hidden')
    else sidebar.classList.add('hidden');
  
}

window.addEventListener('resize', setSidebar)

window.addEventListener('load', setSidebar);

const closeSidebar = () => {
  sidebar.classList.toggle('hidden');
  content.classList.remove('hidden');
  content.classList.remove('blured');
  header.classList.remove('blured');
}

closeSidebarButton.addEventListener('click', closeSidebar);
document.addEventListener('click', (e) => {
  console.log(window.screen.width)
  if (!sidebar.classList.contains('hidden') && e.offsetX > 320 && window.screen.width <= 1439) {
    closeSidebar();
  }
})

openSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  if (!sidebar.classList.contains('hidden') && body.offsetWidth < 361) content.classList.add('hidden')
  else {
    content.classList.add('blured');
    header.classList.add('blured');
  }
})

