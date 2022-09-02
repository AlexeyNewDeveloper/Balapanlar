export class Popup {
    constructor({popup, contentContainer, buttonsClose}) {
        this._contentContainer = contentContainer;
        this._popup = popup;
        this._buttonClose = buttonsClose;
        this._closeByEscCallback = this._closeByEsc.bind(this);
        this._closePopupCallback = this.closePopup.bind(this);
        this._closePopupToOverlayCallback = this._closePopupToOverlay.bind(this);
    }

    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
          this.closePopup(this._popup);
        }
      }

    _closePopupToOverlay(evt) {
        if(!evt.target.closest(this._contentContainer)) {
            this.closePopup();
        }
    }

    _setEventListeners() {
        document.addEventListener("keydown", this._closeByEscCallback);
        this._buttonClose.forEach(button => {
            button.addEventListener('click', this._closePopupCallback);
        })
        this._popup.addEventListener('click', this._closePopupToOverlayCallback);
    }

    _removeEventListeners() {
        document.removeEventListener("keydown", this._closeByEscCallback);
        this._buttonClose.forEach(button => {
            button.removeEventListener('click', this._closePopupCallback);
        })
        this._popup.removeEventListener('click', this._closePopupToOverlayCallback)
    }

    openPopup() {
        this._popup.classList.add("popup_opened");
        this._setEventListeners();
    }

    closePopup() {
        this._popup.classList.remove("popup_opened");
        this._removeEventListeners();
    }
}