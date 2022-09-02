import { Popup } from './Popup.js';



export class SectionPartners extends Popup {
    constructor({paramsSectionPartners={
        logoImgOfPopupPartner,
        aboutOfPopupPartner, 
        linkOfPopupPartner,
        partnerNode,
        partnerContainer,
        logoSelector,
        popup,
        contentContainerSelector,
        buttonClosePopupPartner,
    }}) {
        super({
            popup: paramsSectionPartners.popup, 
            contentContainer: paramsSectionPartners.contentContainerSelector,
            buttonsClose: paramsSectionPartners.buttonClosePopupPartner,
        });
        this._params = paramsSectionPartners;
        this._partnerNode = this._params.partnerNode;
        this._container = this._params.partnerContainer;
    }


    _renderPartners(partner, partnerLogo) {
        partnerLogo.src = partner.image;
        return partnerLogo;
    }


    _addPartner(partner, partnerLogo) {
        const renderedPartner = this._renderPartners(partner, partnerLogo);
        this._container.append(renderedPartner);
    }


    _addPartnerInfo(partner) {
        this._params.logoImgOfPopupPartner.src = partner.image;
        this._params.aboutOfPopupPartner.textContent = partner.about;
        this._params.linkOfPopupPartner.href = partner.website;
        super.openPopup();
    }

    _setEventListenersSectionPartners(partnerLogo, partner) {
        partnerLogo.addEventListener('click', this._addPartnerInfo.bind(this, partner));
    }


    addPartners({partnersList}) {
        partnersList.forEach(partner => {
            const partnerLink = this._params.partnerNode.cloneNode(true);
            const partnerLogo = partnerLink.querySelector(this._params.logoSelector);
            this._addPartner(partner, partnerLogo);
            this._setEventListenersSectionPartners(partnerLogo, partner);
        })
    }

}