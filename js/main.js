// Checkbox

const checkbox = document.querySelectorAll('.label input');

document.querySelector('.checkbox__container').addEventListener('mousedown', (ev) => {
    for (let check of checkbox) {
        if (ev.target == check || ev.target.firstElementChild == check || ev.target.parentElement.firstElementChild == check && check.checked == false) {
            check.parentElement.style.color = '#7943A4';
        };
    };
});

document.querySelector('.checkbox__container').addEventListener('click', () => {
    for (let check of checkbox) {
        if (check.checked == true) {
            check.parentElement.style.color = '#C283F3';
        }
        else if (check.checked == false) {
            check.parentElement.style.color = 'var(--white)';
        };
    };
});

// Events Swow All Button

const btn = document.querySelector('.events__all__btn');
const events = document.querySelectorAll('.event');

btn.addEventListener('click', () => {
    for (let event of events) {
        if (event.classList.contains('event__hidden__768')) {
          event.classList.remove('event__hidden__768');
        };
        if (event.classList.contains('event__hidden')) {
          event.classList.remove('event__hidden');
        };
    };
    btn.style.display = 'none';
});

// Mask

const selector = document.querySelector("input[type='tel']");
const number = new Inputmask("+7 (999) 999-99-99");
number.mask(selector);

// Validator

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    colorWrong: 'red',
    messages: {
        name: {
            minLength: 'Поле должно содержать минимум 2 символа',
            maxLength: 'Поле должно содержать максимум 30 символов',
            required: 'Обязательное поле'
        },
        tel: 'Некоректный номер!'
    }
});

// Yandex Map

ymaps.ready(init);
function init() {

    var myMap = new ymaps.Map("map", {
        center: [55.7608,37.6207],
        zoom: 13,
        controls: []
    });
    var myPlacemark = new ymaps.Placemark([55.7584, 37.6011], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map_mark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            top: '190px',
            right: '16px'
        }
    });
    myMap.controls.add('geolocationControl', {
        float: 'none',
        position: {
            top: '280px',
            right: '16px'
        }
    });
    myMap.geoObjects.add(myPlacemark);

};

// Anchors

$('.hero__button').on('click', function(ev) {
    ev.preventDefault();
    var top = $('#subscribe').offset().top;
    $('html, body').animate({
        scrollTop: top,
    }, 1000);
});

$('.nav__about').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#about').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__gallery').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#gallery').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__catalog').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#catalog').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__events').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#events').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__public').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#public').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__projects').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#projects').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

$('.nav__contacts').on('click', function(ev) {
  ev.preventDefault();
  var top = $('#contacts').offset().top;
  $('html, body').animate({
      scrollTop: top,
  }, 1000);
});

// Projects Swiper

var projectsSwiper = new Swiper('.projects__swiper-container', {

    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.projects__next',
        prevEl: '.projects__prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      900: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 52,
      },
      1401: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }

});

// Gallery Swiper

var gallerySwiper = new Swiper('.gallery__swiper-container', {

    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__button__next',
        prevEl: '.gallery__button__prev',
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      762: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      1600: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }

});

// Events Swiper

var swiper = new Swiper('.events__swiper-container', {
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.events-pagination',
  },
  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});

// Accordion

$( function() {
    $( "#accordion" ).accordion({
      heighStyle: "content",
    });
    $( "#accordion").accordion("refresh");
});

// Public Swiper

var publicSwiper = new Swiper('.public__swiper-container', {

    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 53,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.public-pagination',
      type: 'fraction',
    },
    navigation: {
        nextEl: '.public__button__next',
        prevEl: '.public__button__prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      900: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 53,
      },
      1250: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 53,
      }
    }

});

// Language Focus

const languages = document.querySelectorAll('.language');

for (let language of languages) {
    const border = function(event) {
        if (event.target.classList.contains('language__border')) {return};
        for (let lang of languages) {
            if (lang.classList.contains('language__border')) {
                lang.classList.remove('language__border');
            };
        };
        language.classList.add('language__border');
    };
    language.addEventListener('click', border);
};

// Search Field

const searchField = document.querySelector('.nav__search');
const searchButton = document.querySelector('.search__icon');

searchField.addEventListener('focus', () => {
    searchButton.style.backgroundImage = 'url(../img/search_icon_purple.svg)';
});

searchField.addEventListener('blur', () => {
    searchButton.style = '';
});

// Header Dropdown

const listItems = document.querySelectorAll('.nav__list__item__second');
const listItemsContent = document.querySelectorAll('.drop__list__item');
const navListSecond = document.querySelector('.nav__list__second');

for (const item of listItems) {
  item.addEventListener('click', dropdown);
  item.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' || event.code == 'Space') {
      dropdown(event);
    };
  });
  item.addEventListener('focusout', (event) => {
    if (item.contains(event.relatedTarget) == true) {
      return;
    }
    else {
      if (item.children[1].children[0].classList.contains('drop__anim')) {
        item.children[1].children[0].classList.remove('drop__anim');
        item.children[1].children[0].classList.add('up__anim');
        item.classList.remove('drop__active');
        item.children[1].classList.add('events__disable');
        for (const content of listItemsContent) {
          if (item.children[1].children[0].contains(content)) {
            content.setAttribute('tabindex', '-1');
          };
        };
      };
    };
  });
};

function dropdown(ev) {
    let element;

    if (ev.target.classList.contains('nav__list__item__second')) {
        element = ev.target;
    }
    else if (!ev.target.classList.contains('nav__list__item__second') && ev.target.parentElement.classList.contains('nav__list__item__second')) {
        element = ev.target.parentElement;
    }
    else return;

    element.classList.toggle('drop__active');

    const dropContainer = element.children[1];
    const dropList = element.children[1].children[0];

    dropContainer.classList.toggle('events__disable');

    if (dropList.classList.contains('drop__anim')) {
        dropList.classList.remove('drop__anim');
        dropList.classList.add('up__anim');
        for (const content of listItemsContent) {
          if (element.contains(content)) {
            content.setAttribute('tabindex', '-1');
          };
        };
    }
    else {
        dropList.classList.remove('up__anim');
        dropList.classList.add('drop__anim');
        for (const content of listItemsContent) {
          if (element.contains(content)) {
            content.setAttribute('tabindex', '0');
          };
        };
    };

};

// Catalog List

const artistList = document.querySelector('.period__people');
const artists = document.querySelectorAll('.period__artist');

artistList.addEventListener('click', changeArtist);
artistList.addEventListener('keydown', changeArtistKey);

function changeArtist(ev) {

    if (ev.target.classList.contains('period__artist') && !ev.target.classList.contains('active__artist')) {
        for (let artist of artists) {
            if (artist.classList.contains('active__artist')) {
                artist.classList.remove('active__artist');
            };
        };
        ev.target.classList.add('active__artist');

        const artistImg = document.querySelector('.artist__img');
        const artistName = document.querySelector('.artist__head');
        const artistDate = document.querySelector('.artist__date');
        const artistDescription = document.querySelector('.artist__description');

        if (ev.target.textContent == 'Андреа Верроккьо') {
            artistImg.src = 'img/verrokkio.jpg';
            artistName.textContent = 'Андреа Верроккьо';
            artistDate.textContent = '1435 — 10 октября 1488.';
            artistDescription.textContent = 'Выдающийся итальянский скульптор, живописец и ювелир эпохи Возрождения. Учитель Леонардо да Винчи, Сандро Боттичелли, Пьетро Перуджино.'
        }
        else if (ev.target.textContent == 'Доменико Гирландайо') {
            artistImg.src = 'img/Domenico.jpg';
            artistName.textContent = 'Доменико Гирландайо';
            artistDate.textContent = '2 июня 1448 — 11 января 1494.';
            artistDescription.textContent = 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).'
        }
    };

};

function changeArtistKey(ev) {

    if (ev.code == 'Enter' || ev.code == 'Space') {
      ev.preventDefault();
      changeArtist(ev);
    };

};

//Header Search

const headerSearch = document.querySelector('.search__icon__1024');
const headerSearch768 = document.querySelector('.search__icon__768');
const headerSearch320 = document.querySelector('.search__icon__320');
const navSearch = document.querySelector('.nav__search__1024');
const navSearch768 = document.querySelector('.nav__search__768');
const navSearch320 = document.querySelector('.nav__search__320');
const cont = document.querySelector('.nav__search__container');
const cont768 = document.querySelector('.nav__search__container__768');
const cont320 = document.querySelector('.nav__search__container__320');
const searchClose768 = document.querySelector('.search__close__768');
const searchClose320 = document.querySelector('.search__close__320');
const logoLink = document.querySelector('.logo__link');
const headerFormBox = document.querySelector('.header__form__container')

navSearch.addEventListener('focus', () => {
  headerSearch.classList.add('search__background');
});

navSearch.addEventListener('blur', () => {
  headerSearch.classList.remove('search__background');
});

headerSearch.addEventListener('click', (event) => {
  if (headerSearch.getAttribute('type') == 'submit') {return};
  searchToggle(event);
});

headerSearch768.addEventListener('click', (event) => {
  if (headerSearch768.getAttribute('type') == 'submit') {return};
  searchToggle768(event);
});

searchClose768.addEventListener('click', (event) => {
  searchToggle768(event);
});

headerSearch320.addEventListener('click', (event) => {
  if (headerSearch320.getAttribute('type') == 'submit') {return};
  searchToggle320(event);
});

searchClose320.addEventListener('click', (event) => {
  searchToggle320(event);
});

function searchToggle(ev) {
  ev.preventDefault();
  if (!cont.classList.contains('search__show')) {
    cont.classList.add('search__show');
    navSearch.setAttribute('tabindex', '0');
  }
  else {
    cont.classList.remove('search__show');
    navSearch.setAttribute('tabindex', '-1');
  };
};

function searchToggle768(ev) {
  ev.preventDefault();
  if (!cont768.classList.contains('search__show')) {
    cont768.classList.add('search__show');
    burger.classList.add('search__hidden');
    headerSearch768.setAttribute('type', 'submit');
    searchClose768.classList.add('search__visible');
    searchClose768.setAttribute('tabindex', '0');
    logoLink.classList.add('search__logo__move');
    navSearch768.setAttribute('tabindex', '0');
  }
  else {
    cont768.classList.remove('search__show');
    burger.classList.remove('search__hidden');
    headerSearch768.setAttribute('type', 'button');
    searchClose768.classList.remove('search__visible');
    searchClose768.setAttribute('tabindex', '-1');
    logoLink.classList.remove('search__logo__move');
    navSearch768.setAttribute('tabindex', '-1');
  };
};

function searchToggle320(ev) {
  ev.preventDefault();
  if (!cont320.classList.contains('search__show')) {
    cont320.classList.add('search__show');
    headerSearch.setAttribute('type', 'submit');
    searchClose320.classList.add('search__visible');
    searchClose320.setAttribute('tabindex', '0');
    headerFormBox.classList.add('header__form__container__move');
    navSearch320.setAttribute('tabindex', '0');
  }
  else {
    cont320.classList.remove('search__show');
    headerSearch.setAttribute('type', 'button');
    searchClose320.classList.remove('search__visible');
    searchClose320.setAttribute('tabindex', '-1');
    headerFormBox.classList.remove('header__form__container__move');
    navSearch320.setAttribute('tabindex', '-1');
  };
};

//Burger

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerTabs = document.querySelectorAll('.burger__tab');

function burgerToggle() {
  if (burger.classList.contains('burger__open')) {
    burger.classList.remove('burger__open');
    burger.classList.add('burger__close');
    burgerMenu.classList.remove('burger__menu__open');
    for (const tab of burgerTabs) {
      tab.setAttribute('tabindex', '-1');
    }
  }
  else {
    burger.classList.remove('burger__close');
    burger.classList.add('burger__open');
    burgerMenu.classList.add('burger__menu__open');
    for (const tab of burgerTabs) {
      tab.setAttribute('tabindex', '0');
    }
  };
};

burger.addEventListener('click', burgerToggle);
burgerMenu.addEventListener('focusout', (event) => {
  if (event.relatedTarget == burger) {
    return;
  }
  else if (burgerMenu.contains(event.relatedTarget)) {
    return;
  }
  burgerToggle();
});
burger.addEventListener('focusout', (event) => {
  if (burgerMenu.contains(event.relatedTarget)) {
    return;
  }
  else if (burgerMenu.classList.contains('burger__menu__open')) {
    burgerToggle();
  }
});

for (const tab of burgerTabs) {
  tab.addEventListener('click', (event) => {
    event.target.blur();
  });
};

// Gallery Selector

const gallerySelector = document.querySelector('.gallery__list');
const items = document.querySelectorAll('.gallery__list__item:not(:first-child');
const icon = document.querySelector('.gallery__list__item__icon');

gallerySelector.addEventListener('click', toggleSelector);
gallerySelector.addEventListener('click', select);
gallerySelector.addEventListener('keydown', (event) => {
  if (event.code == 'Enter' || event.code == 'Space') {
    event.preventDefault();
    toggleSelector();
  };
});
gallerySelector.addEventListener('keydown', (event) => {
  if (event.code == 'Enter' || event.code == 'Space') {
    event.preventDefault();
    select(event);
  };
});


function toggleSelector() {
    for (let item of items) {
        if (item.classList.contains('hide')) {
          item.classList.remove('hide');
          icon.classList.add('gallery__icon__rotate');
          item.setAttribute('tabindex', '0');
        }
        else if (!item.classList.contains('hide')) {
          item.classList.add('hide');
          icon.classList.remove('gallery__icon__rotate');
          item.setAttribute('tabindex', '-1');
        };
    };
};

function select(ev) {

    if (ev.target == gallerySelector || ev.target == document.querySelector('.gallery__list__item:first-child')) {return}

    const firstItem = document.querySelector('.gallery__list__item:first-child');
    const choice = ev.target.firstChild.textContent;
    ev.target.firstChild.textContent = firstItem.firstChild.textContent;
    firstItem.firstChild.textContent = choice;
    for (let item of items) {
      item.classList.add('hide');
    };
    gallerySelector.focus();

};

gallerySelector.addEventListener('focusout', (event) => {
  if (gallerySelector.contains(event.relatedTarget)) {
    return;
  }
  for (const item of items) {
    if (item.classList.contains('hide')) {
      return;
    }
    else {
      toggleSelector()
    }
  }
});

// Outside The Selectors

window.addEventListener('pointerup', (event) => {
  if (!burgerMenu.contains(event.target) && event.target != burger && burgerMenu.classList.contains('burger__menu__open')) {
    if (burgerMenu.contains(document.activeElement)) {return}
    burgerToggle()
  };
});

// Mobile Checkbox Spoiler

const checkContainer = document.querySelector('.checkbox__container__320');
const checkHead = document.querySelector('.check__head');
const checkList = document.querySelector('.checkbox__list');
const checkItems = document.querySelectorAll('.checkbox__list__item');
const checkChoices = document.querySelector('.check__choices__list');

checkContainer.addEventListener('click', (event) => {
  filterChoice(event);
  if (event.target == checkHead) {
    openSpoiler();
  };
});
checkContainer.addEventListener('keyup', (event) => {
  if (event.code == 'Enter' || event.code == 'Space') {
    event.preventDefault();
    filterChoice(event);
    if (event.target == checkHead) {
      openSpoiler();
    };
  };
});

function openSpoiler() {
  if (!checkList.classList.contains('checkbox__list__open')) {
    checkList.classList.add('checkbox__list__open');
    checkHead.classList.add('check__head__active');
    for (const item of checkItems) {
      item.setAttribute('tabindex', '0');
    };
    const filters = document.querySelectorAll('.choices__list__item');
    const filtersList = document.querySelector('.check__choices__list');
    if (filtersList.children[0]) {
      for (const filter of filters) {
        filter.setAttribute('tabindex', '-1');
      };
    };
  }
  else if (checkList.classList.contains('checkbox__list__open')) {
    checkList.classList.remove('checkbox__list__open');
    checkHead.classList.remove('check__head__active');
    for (const item of checkItems) {
      item.setAttribute('tabindex', '-1');
    };
    const filters = document.querySelectorAll('.choices__list__item');
    const filtersList = document.querySelector('.check__choices__list');
    if (filtersList.children[0]) {
      for (const filter of filters) {
        filter.setAttribute('tabindex', '0');
      };
    };
  };
};

function filterChoice(event) {
  for (const item of checkItems) {
    if (event.target == item) {
      const inner = item.innerHTML;
      const newFilter = document.createElement('li');
      newFilter.innerHTML = inner;
      newFilter.classList.add('choices__list__item');
      newFilter.firstElementChild.classList.add('checkbox__box__checked');
      checkChoices.append(newFilter);
      item.classList.add('checkbox__hide');
    };
  };
  const choiceItems = document.querySelectorAll('.choices__list__item');
  for (const item of choiceItems) {
    if (event.target == item) {
      for (const checkItem of checkItems) {
        if (item.children[1].textContent == checkItem.children[1].textContent) {
          item.remove();
          checkItem.classList.remove('checkbox__hide');
        };
      };
    };
  };
};

checkContainer.addEventListener('focusout', (event) => {
  if (checkContainer.contains(event.relatedTarget)) {
    return;
  };
  if (!checkList.classList.contains('checkbox__list__open')) {
    return;
  };
  if (!event.relatedTarget) {
    return;
  };
  openSpoiler();
});

// Tooltips

tippy('#firstTooltip', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 264,
  offset: [0, 13],
  theme: 'light',
});

tippy('#secondTooltip', {
  content: 'Принято, граждане. наблюдать. как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 264,
  offset: [0, 11],
  theme: 'light',
});

tippy('#thirdTooltip', {
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  offset: [0, 12],
  theme: 'light',
});
