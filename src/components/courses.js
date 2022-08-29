import { openPopup } from './utils.js';
import { courseOpenBtn, coursePopup, popupCloseButton } from './constants.js';

courseOpenBtn.addEventListener("click", function () {
  openPopup(coursePopup);
  if(window.matchMedia('(max-width: 400px)').matches) {
    popupCloseButton.classList.add('popup__close-btn_position_fixed');
  }
});
