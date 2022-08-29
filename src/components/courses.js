import { openPopup } from './utils.js';
import { courseOpenBtn, coursePopup, popupCloseButton } from './constants.js';

courseOpenBtn.addEventListener("click", function () {
  openPopup(coursePopup);

});
