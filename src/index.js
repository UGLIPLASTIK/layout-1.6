/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@/css/swiper.bundle.min.css';
import '@/css/style.css';
import '@/scss/style.scss';
import '@/swiper-bundle.min.js';
import '@/js/modal_feedback.js';
import '@/js/sidebar.js';
import '@/js/hide_buttons.js'

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
});


