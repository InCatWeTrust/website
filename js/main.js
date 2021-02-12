import {artistsBio} from './artists.js';

// Events Swow All Button

const btn = document.querySelector('.button-container__all-events');
const events = document.querySelectorAll('.event');

btn.addEventListener('click', () => {
    for (let event of events) {
        if (event.classList.contains('event_hidden_768')) {
          event.classList.remove('event_hidden_768');
        };
        if (event.classList.contains('event_hidden')) {
          event.classList.remove('event_hidden');
        };
    };
    btn.style.display = 'none';
});

// Mask

const selector = document.querySelector("input[type='tel']");
const number = new Inputmask("+7 (999) 999-99-99");
number.mask(selector);

// Validator

new JustValidate('.contacts-form', {
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
        tel: 'Некорректный номер!'
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

$('.hero-text__button').on('click', function(ev) {
    ev.preventDefault();
    var top = $('#subscribe').offset().top;
    $('html, body').animate({
        scrollTop: top,
    }, 1000);
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (ev) => {

  ev.preventDefault();
  if (ev.target.classList.contains('nav-about')) {
    var top = $('#about').offset().top;
  }
  else if (ev.target.classList.contains('nav-gallery')) {
    var top = $('#gallery').offset().top;
  }
  else if (ev.target.classList.contains('nav-catalog')) {
    var top = $('#catalog').offset().top;
  }
  else if (ev.target.classList.contains('nav-events')) {
    var top = $('#events').offset().top;
  }
  else if (ev.target.classList.contains('nav-public')) {
    var top = $('#public').offset().top;
  }
  else if (ev.target.classList.contains('nav-projects')) {
    var top = $('#projects').offset().top;
  }
  else if (ev.target.classList.contains('nav-contacts')) {
    var top = $('#contacts').offset().top;
  }

  $('html, body').animate({
    scrollTop: top,
}, 1000);

});

// Projects Swiper

var projectsSwiper = new Swiper('.projects-swiper-container', {

    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
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

var gallerySwiper = new Swiper('.gallery-swiper-container', {

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
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
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
        spaceBetween: 34,
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

const eventsSlider = document.querySelector('.events-swiper-container');

let eventsSwiper;

function mobileSwiper() {
  if (window.innerWidth <= 760 && eventsSlider.dataset.mobile == 'false') {
      eventsSwiper = new Swiper('.events-swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      slideClass: 'event',
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

    eventsSlider.dataset.mobile = 'true';
  };
  if (window.innerWidth > 760) {
    eventsSlider.dataset.mobile = 'false'

    if (eventsSlider.classList.contains('swiper-container-initialized')) {
      eventsSwiper.destroy();
    };
  };
};

mobileSwiper();

// Accordion

$( function() {
    $( "#accordion" ).accordion({
      heighStyle: "content",
    });
});

// Public Swiper

const publicSlider = document.querySelector('.public-swiper-container');

let publicSwiper;

function publicSwiperInit() {

  if (window.innerWidth >= 760 && publicSlider.dataset.mobile == 'true') {
    publicSwiper = new Swiper('.public-swiper-container', {

      observer: true,
      observeSlideChildren: true,
      observeParents: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 53,
      loop: true,
      loopFillGroupWithBlank: true,
      slideClass: 'book',
      pagination: {
        el: '.public-pagination',
        type: 'fraction',
      },
      navigation: {
          nextEl: '.public-button-next',
          prevEl: '.public-button-prev',
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
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 70,
        },
        1400: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 53,
        }
      }

    });

    publicSlider.dataset.mobile = 'false';
  };
  if (window.innerWidth < 760) {
    publicSlider.dataset.mobile = 'true'

    if (publicSlider.classList.contains('swiper-container-initialized')) {
      publicSwiper.destroy();
    };
  };

};

publicSwiperInit();

// Language tabs

const languages = document.querySelector('.language-container');
const langTabs = document.querySelectorAll('.language-container__language');
const artistList = document.querySelectorAll('.period-people');
const artists = document.querySelectorAll('.period-people__artist-span');
const artistImg = document.querySelector('.artist__img');
const artistName = document.querySelector('.artist__head');
const artistDate = document.querySelector('.artist__date');
const artistDescription = document.querySelector('.artist__description');

function addBorder(event) {
  if (event.target.classList.contains('language_border') || !event.target.classList.contains('language-container__language')) {return};
  for (const lang of langTabs) {
    if (lang.classList.contains('language_border')) {
      lang.classList.remove('language_border');
    };
  };
  event.target.classList.add('language_border');
};

function removeActive() {
  for (let artist of artists) {
    if (artist.classList.contains('active-artist')) {
        artist.classList.remove('active-artist');
    };
  };
};

function addActive() {
  const activeHead = document.querySelector('.ui-accordion-content-active');
  for (const child of activeHead.children) {
    if (!child.classList.contains('period-people_hidden')) {
      child.children[0].children[0].classList.add('active-artist');
      for (const artistBio of artistsBio) {
        if (artistBio.name == child.children[0].textContent) {
          artistName.textContent = artistBio.name;
          artistImg.src = artistBio.img;
          artistDate.textContent = artistBio.date;
          artistDescription.textContent = artistBio.bio;
        };
      };
    };
  };
};

languages.addEventListener('click', (ev) => {
  addBorder(ev);
  removeActive();
  if (ev.target.classList.contains('france')) {
    for (const list of artistList) {
      if (!list.classList.contains('period-people-russia')) {
        list.classList.add('period-people_hidden');
      };
      if (list.classList.contains('period-people-russia')) {
        list.classList.remove('period-people_hidden');
      };
    };
  }
  else if (ev.target.classList.contains('italy')) {
    for (const list of artistList) {
      if (!list.classList.contains('period-people-italy')) {
        list.classList.add('period-people_hidden');
      };
      if (list.classList.contains('period-people-italy')) {
        list.classList.remove('period-people_hidden');
      };
    };
  }
  else if (ev.target.classList.contains('russia')) {
    for (const list of artistList) {
      if (!list.classList.contains('period-people-russia')) {
        list.classList.add('period-people_hidden');
      };
      if (list.classList.contains('period-people-russia')) {
        list.classList.remove('period-people_hidden');
      };
    };
  }
  else if (ev.target.classList.contains('germany')) {
    for (const list of artistList) {
      if (!list.classList.contains('period-people-germany')) {
        list.classList.add('period-people_hidden');
      };
      if (list.classList.contains('period-people-germany')) {
        list.classList.remove('period-people_hidden');
      };
    };
  }
  else if (ev.target.classList.contains('belgium')) {
    for (const list of artistList) {
      if (!list.classList.contains('period-people-belgium')) {
        list.classList.add('period-people_hidden');
      };
      if (list.classList.contains('period-people-belgium')) {
        list.classList.remove('period-people_hidden');
      };
    };
  };
  addActive();
});

// Search Field

const searchField = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchField.addEventListener('focus', () => {
    searchButton.style.backgroundImage = 'url(../img/search_icon_purple.svg)';
});

searchField.addEventListener('blur', () => {
    searchButton.style = '';
});

// Header Dropdown

const listItems = document.querySelectorAll('.nav-list-second__item');
const listItemsContent = document.querySelectorAll('.nav-list-second__drop-list-item');
const navListSecond = document.querySelector('.nav-list-second');

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
        item.children[1].classList.add('events-disable');
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

    if (ev.target.classList.contains('nav-list-second__item')) {
        element = ev.target;
    }
    else if (!ev.target.classList.contains('nav-list-second__item') && ev.target.parentElement.classList.contains('nav-list-second__item')) {
        element = ev.target.parentElement;
    }
    else return;

    element.classList.toggle('drop__active');

    const dropContainer = element.children[1];
    const dropList = element.children[1].children[0];

    dropContainer.classList.toggle('events-disable');

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

const artistBox = document.querySelector('.accordion-box');

artistBox.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('period-people__artist-span')) {
    changeArtist(ev);
  };
});
artistBox.addEventListener('keydown', (ev) => {
  if (ev.target.classList.contains('period-people__artist-span')) {
    changeArtistKey(ev);
  };
});

function changeArtist(ev) {

    if (!ev.target.classList.contains('active-artist')) {

        removeActive();
        ev.target.classList.add('active-artist');

        for (const artistBio of artistsBio) {
          if (artistBio.name == ev.target.textContent) {
            artistName.textContent = artistBio.name;
            artistImg.src = artistBio.img;
            artistDate.textContent = artistBio.date;
            artistDescription.textContent = artistBio.bio;
          };
        };

    };

};

function changeArtistKey(ev) {

    if (ev.code == 'Enter' || ev.code == 'Space') {
      ev.preventDefault();
      changeArtist(ev);
    };

};

//Header Search

// const headerSearch = document.querySelector('.search-button');
// const headerSearch768 = document.querySelector('.search-button-landscape');
// const headerSearch320 = document.querySelector('.search-button-mobile');
// const navSearch = document.querySelector('.search-input');
// const navSearch768 = document.querySelector('.search-input-landscape');
// const navSearch320 = document.querySelector('.search-input-mobile');
// const cont = document.querySelector('.search-form');
// const cont768 = document.querySelector('.search-form-landscape');
// const cont320 = document.querySelector('.search-form-mobile');
// const searchClose768 = document.querySelector('.search-close-landscape');
// const searchClose320 = document.querySelector('.search-close-mobile');
// const logoLink = document.querySelector('.logo-container__logo-link');
// const headerFormBox = document.querySelector('.search-form-container')

// navSearch.addEventListener('focus', () => {
//   headerSearch.classList.add('search__background');
// });

// navSearch.addEventListener('blur', () => {
//   headerSearch.classList.remove('search__background');
// });

// headerSearch.addEventListener('click', (event) => {
//   if (headerSearch.getAttribute('type') == 'submit') {return};
//   searchToggle(event);
// });

// headerSearch768.addEventListener('click', (event) => {
//   if (headerSearch768.getAttribute('type') == 'submit') {return};
//   searchToggle768(event);
// });

// searchClose768.addEventListener('click', (event) => {
//   searchToggle768(event);
// });

// headerSearch320.addEventListener('click', (event) => {
//   if (headerSearch320.getAttribute('type') == 'submit') {return};
//   searchToggle320(event);
// });

// searchClose320.addEventListener('click', (event) => {
//   searchToggle320(event);
// });

// function searchToggle(ev) {
//   ev.preventDefault();
//   if (!cont.classList.contains('search__show')) {
//     cont.classList.add('search__show');
//     navSearch.setAttribute('tabindex', '0');
//   }
//   else {
//     cont.classList.remove('search__show');
//     navSearch.setAttribute('tabindex', '-1');
//   };
// };

// function searchToggle768(ev) {
//   ev.preventDefault();
//   if (!cont768.classList.contains('search__show')) {
//     cont768.classList.add('search__show');
//     burger.classList.add('search__hidden');
//     headerSearch768.setAttribute('type', 'submit');
//     searchClose768.classList.add('search__visible');
//     searchClose768.setAttribute('tabindex', '0');
//     logoLink.classList.add('logo-link_move');
//     navSearch768.setAttribute('tabindex', '0');
//   }
//   else {
//     cont768.classList.remove('search__show');
//     burger.classList.remove('search__hidden');
//     headerSearch768.setAttribute('type', 'button');
//     searchClose768.classList.remove('search__visible');
//     searchClose768.setAttribute('tabindex', '-1');
//     logoLink.classList.remove('logo-link_move');
//     navSearch768.setAttribute('tabindex', '-1');
//   };
// };

// function searchToggle320(ev) {
//   ev.preventDefault();
//   if (!cont320.classList.contains('search__show')) {
//     cont320.classList.add('search__show');
//     headerSearch.setAttribute('type', 'submit');
//     searchClose320.classList.add('search__visible');
//     searchClose320.setAttribute('tabindex', '0');
//     headerFormBox.classList.add('search-form-container_move');
//     navSearch320.setAttribute('tabindex', '0');
//   }
//   else {
//     cont320.classList.remove('search__show');
//     headerSearch.setAttribute('type', 'button');
//     searchClose320.classList.remove('search__visible');
//     searchClose320.setAttribute('tabindex', '-1');
//     headerFormBox.classList.remove('search-form-container_move');
//     navSearch320.setAttribute('tabindex', '-1');
//   };
// };

//Burger

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav-menu');
const burgerTabs = document.querySelectorAll('.tab');

function burgerToggle() {
  if (burger.classList.contains('burger_open')) {
    burger.classList.remove('burger_open');
    burger.classList.add('burger_close');
    burgerMenu.classList.remove('burger-menu_open');
    for (const tab of burgerTabs) {
      tab.setAttribute('tabindex', '-1');
    }
  }
  else {
    burger.classList.remove('burger_close');
    burger.classList.add('burger_open');
    burgerMenu.classList.add('burger-menu_open');
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
  else if (burgerMenu.classList.contains('burger-menu_open')) {
    burgerToggle();
  }
});

for (const tab of burgerTabs) {
  tab.addEventListener('click', (event) => {
    event.target.blur();
  });
};

// Public Spoiler

const checkboxHead = document.querySelector('.check-head');
const spoiler = document.querySelector('.checkbox-container');
const spoilerItems = document.querySelectorAll('.label');

function toggleSpoiler() {

  checkboxHead.classList.toggle('check-head_active');
  if (!checkboxHead.classList.contains('check-head_active')) {
    checkState();
  }
  else {
    for (const item of spoilerItems) {
      item.classList.remove('checkbox_hide');
    };
  };

};

function checkState() {

  for (const item of spoilerItems) {

    if (!item.firstElementChild.checked) {
      item.classList.add('checkbox_hide');
    };
  };

};

function checkboxSpoiler() {

  if (window.innerWidth <= 760 && checkboxHead.dataset.mobile == 'false') {
    spoiler.dataset.mobile = 'true';
    checkboxHead.addEventListener('click', toggleSpoiler);
    spoiler.addEventListener('click', () => {
      if (!checkboxHead.classList.contains('check-head_active')) {
        checkState();
      };
    });
    checkState();

    checkboxHead.dataset.mobile = 'true';
  };
  if (window.innerWidth > 760) {
    checkboxHead.dataset.mobile = 'false';
    if (spoiler.dataset.mobile == 'true') {
      checkboxHead.removeEventListener('click', toggleSpoiler);
    };
  };

};

checkboxSpoiler();

window.addEventListener('resize', () => {
  $( "#accordion").accordion("refresh");
  mobileSwiper();
  publicSwiperInit();
  checkboxSpoiler();
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

tippy('#fourthTooltip', {
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  offset: [0, 12],
  theme: 'light',
});

// Choices Gallery

const gallerySelector = document.querySelector('.gallery-filter__list');
const choices = new Choices(gallerySelector, {
  searchEnabled: false,
});


// Outside The Selectors

window.addEventListener('pointerup', (event) => {
  if (!burgerMenu.contains(event.target) && event.target != burger && burgerMenu.classList.contains('burger-menu_open')) {
    if (burgerMenu.contains(document.activeElement)) {return}
    burgerToggle()
  };
});
