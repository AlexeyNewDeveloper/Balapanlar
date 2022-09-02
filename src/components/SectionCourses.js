import { Popup } from './Popup.js';

export class SectionCourses extends Popup {
    constructor({paramsSectionCourses={
        popup,
        contentContainerSelector,
        buttonsOpenCourse,
        buttonsClosePopupCourse,
    }}) {
        super({
            popup: paramsSectionCourses.popup, 
            contentContainer: paramsSectionCourses.contentContainerSelector,
            buttonsClose: paramsSectionCourses.buttonsClosePopupCourse,
        });
        this._buttonsOpenCourse = paramsSectionCourses.buttonsOpenCourse;
    }

    enableButtonsOpenPopup() {
        this._buttonsOpenCourse.forEach(button => {
            button.addEventListener("click", () => {
                super.openPopup();
              });
        })
    }
}