const navbarTogglee = document.getElementById("navbar-toggle");
const mainBody = document.getElementById('main-body');
const navbarWrap = document.getElementById('navbar-wrap');
const navbarBrand = document.getElementById('navbar-brand');

navbarTogglee.addEventListener('click', function (evt) {
  mainBody.classList.toggle("main-body--navbar");
  navbarWrap.classList.toggle("navbar__wrap--active");
  navbarBrand.classList.toggle("navbar__brand--active");
  navbarTogglee.classList.toggle("navbar__toggle--active");
});

let featureSwiper;

if (!isDesctop()) {
  featureSwiper = new Swiper('.schedule__slider', {
    wrapperClass: "schedule__list",
    slideClass: "schedule__item",
    direction: 'horizontal',
    slidesPerView: "auto",
    navigation: {
      nextEl: '.schedule-button-next',
      prevEl: '.schedule-button-prev',
    }
  });
}

let networksFilter
if (!isDesctop()) {
  networksFilter = new Swiper('.networks__filter', {
    wrapperClass: "networks-filter-list",
    slideClass: "networks-filter-item",
    // allowTouchMove: false,
    centeredSlides: true,
    direction: 'horizontal',
    slidesPerView: "auto",
    navigation: {
      nextEl: '.networks-button-next',
      prevEl: '.networks-button-prev',
    }
  });
}

let channelFilter
if (!isDesctop()) {
  channelFilter = new Swiper('.channel__filter', {
    wrapperClass: "channel-filter-list",
    slideClass: "channel-filter-item",
    // allowTouchMove: false,
    centeredSlides: true,
    direction: 'horizontal',
    slidesPerView: "auto",
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    }
  });
}




/* filter */

(function () {
  const activeFilterButton = document.querySelectorAll('.filter__button--active');

  for (let j = 0; j < activeFilterButton.length; j++) {
    const filterCategory = activeFilterButton[j].dataset.category;
    const filterValue = activeFilterButton[j].dataset.filter;
    const elements = document.querySelectorAll('li[data-category="' + filterCategory + '"]');

    for (let i = 0; i < elements.length; i++) {
      if (checkFilter(elements[i], filterValue)) {
        elements[i].classList.add("filter-item-active");
      }
    }
  }

})();

const filterButtons = document.querySelectorAll('button[data-filter]');

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener('click', function (el) {
    const filterCategory = el.target.dataset.category;
    const filterValue = el.target.dataset.filter;

    const active = document.querySelector('.filter__button--active[data-category="' + filterCategory + '"]');
    active.classList.toggle('filter__button--active');
    active.removeAttribute('disabled');

    el.target.classList.toggle('filter__button--active');
    el.target.setAttribute('disabled', 'disabled')

    let elements = document.querySelectorAll('li.filter-item-active[data-category="' + filterCategory + '"]');

    for (let j = 0; j < elements.length; j++) {
      elements[j].classList.remove("filter-item-active");
    }

    elements = document.querySelectorAll('li[data-category="' + filterCategory + '"]');

    for (let j = 0; j < elements.length; j++) {
      if (checkFilter(elements[j], filterValue)) {
        elements[j].classList.add("filter-item-active");
      }
    }
  })
}

function checkFilter(el, filter) {
  return el.dataset.filter.includes(filter);
}


/* ANIMATION SVG */
const providers = document.querySelectorAll('[data-provider]');

for (let i = 0; i < providers.length; i++) {
  providers[i].addEventListener('mouseover', function (el) {
    const provider = el.target.dataset.provider;
    document.getElementById(provider).classList.toggle('providers-active')
  });

  providers[i].addEventListener('mouseout', function (el) {
    const provider = el.target.dataset.provider;
    document.getElementById(provider).classList.toggle('providers-active')
  });
}

const protections = document.querySelectorAll('[data-protection]');

for (let i = 0; i < protections.length; i++) {
  protections[i].addEventListener('mouseover', function (el) {
    const protection = el.target.dataset.protection;
    document.getElementById(protection).classList.toggle('protection-active')
  });

  protections[i].addEventListener('mouseout', function (el) {
    const protection = el.target.dataset.protection;
    document.getElementById(protection).classList.toggle('protection-active')
  });
}
/* ANIMATION SVG */


function isDesctop() {
  return window.innerWidth >= 1200;
}
