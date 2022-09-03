export const partnersList = [
  {
    image: new URL("./../images/logo/partner-logo (1).png", import.meta.url),
    about: '<p class="popup-partner__text">Lecturers Without Borders&nbsp;&mdash; сообщество молодых учёных со&nbsp;всего мира, которые проводят лекции и&nbsp;мастер-классы для школ. Среди лекторов много учёных из&nbsp;России. Для нас математики из&nbsp;Сорбонны проводили занятия по&nbsp;квази-кристаллам, а&nbsp;в&nbsp;будущем мы&nbsp;планируем привозить лекторов в&nbsp;наш центр.</p>',
    website: "https://lewibo.org/",
  },
  {
    image: new URL("./../images/logo/partner-logo (2).png", import.meta.url),
    about: '<p class="popup-partner__text popup-partner__text_type_top">Фонд работает в&nbsp;45&nbsp;регионах и&nbsp;с&nbsp;осени 2021&nbsp;мы их&nbsp;единственные партнёры в&nbsp;Карачаево-Черкесии.</p> <p class="popup-partner__text popup-partner__text_type_bot">Совместно проводим программу профориентации &laquo;Поколение Выбор&raquo;. В&nbsp;2021&ndash;2022&nbsp;в ней приняли участие 35&nbsp;подростков из&nbsp;2&nbsp;школ аула Икон-Халк и&nbsp;посёлка Эркен-Шахар. В&nbsp;сезоне 2022&ndash;2023 планируются ещё две школы.</p>',
    website: "https://xn----7sbfgufj4abfcqfum7kl6d.xn--p1ai/",
  },
  {
    image: new URL("./../images/logo/partner-logo (3).png", import.meta.url),
    about: '<p class="popup-partner__text">ХимБио&nbsp;&mdash; онлайн-школа и&nbsp;выездные программы для детей и&nbsp;подростков со&nbsp;всего мира! Занимаются здесь химией, биологией и&nbsp;физикой, много практики и&nbsp;опытов. Летом детей и&nbsp;подростков ждут экспедиции, а&nbsp;во&nbsp;время учебного года&nbsp;&mdash; курсы по&nbsp;самым разным направлениям.</p>',
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
