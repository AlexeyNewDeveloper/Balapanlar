export const partnersList = [
    {
      image: new URL("./../images/logo/partner-logo (1).png", import.meta.url),
      about:
        "Lecturers Without Borders - сообщество молодых учёных со всего мира, которые проводят лекции и мастер-классы для школ. Среди лекторов много учёных из России. Для нас математики из Сорбонны проводили занятия по квази-кристаллам, а в будущем мы планируем привозить лекторов в наш центр.",
      website: "https://lewibo.org/",
    },
    {
      image: new URL("./../images/logo/partner-logo (2).png", import.meta.url),
      about:
        "Фонд работает в 45 регионах и с осени 2021 мы их единственные партнёры в Карачаево-Черкесии. Совместно проводим программу профориентации «Поколение Выбор». В 2021–2022 в ней приняли участие 35 подростков из 2 школ аула Икон-Халк и посёлка Эркен-Шахар. В сезоне 2022–2023 планируются ещё две школы.",
      website: "https://xn----7sbfgufj4abfcqfum7kl6d.xn--p1ai/",
    },
    {
      image: new URL("./../images/logo/partner-logo (3).png", import.meta.url),
      about:
        "ХимБио — онлайн-школа и выездные программы для детей и подростков со всего мира! Занимаются здесь химией, биологией и физикой, много практики и опытов. Летом детей и подростков ждут экспедиции, а во время учебного года — курсы по самым разным направлениям.",
      website: "https://himbio4you.ru/",
    },
    
  ];

const buttonCloseSelector = '.popup__close-btn';
const popupPartner = document.querySelector('.popup-partner');
const buttonClosePopupPartner = popupPartner.querySelectorAll(buttonCloseSelector);

const popupCourse = document.querySelector('.popup-course');
const buttonsClosePopupCourse = popupCourse.querySelectorAll(buttonCloseSelector);


export const headerElement = document.querySelector('.header');
export const paramsSectionPartners = {
    logoImgOfPopupPartner: document.querySelector('.popup-partner__logo-img'),
    aboutOfPopupPartner: document.querySelector('.popup-partner__text-container'),
    linkOfPopupPartner: document.querySelector('.popup-partner__website-link'),
    partnerNode: document.querySelector('#partners').content.querySelector(".partners__logo-link"),
    partnerContainer: document.querySelector('.partners__logo-box'),
    logoSelector: '.partners__partner-logo',
    popup: popupPartner,
    contentContainerSelector: '.popup-partner__container',
    buttonClosePopupPartner: buttonClosePopupPartner,
};
export const paramsSectionCourses = {
    popup: popupCourse,
    contentContainerSelector: '.popup-course__item',
    buttonsOpenCourse: document.querySelectorAll('.course-item__browse'),
    buttonsClosePopupCourse: buttonsClosePopupCourse,
};
