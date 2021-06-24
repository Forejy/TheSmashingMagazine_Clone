const html = document.getElementsByTagName('html')[0];
const fontSize = parseInt(window.getComputedStyle(html).getPropertyValue('font-size'));
const minWidth = (481/18) * fontSize;
const maxWidth = (689/18) * fontSize; 
const buttons = document.getElementsByClassName('main-nav-buttons')[0];
const button = document.getElementsByClassName('main-nav__menu-btn')[0];
const button2 = document.getElementsByClassName('main-nav__menu-btn--hidden')[0];
const menu = document.getElementsByClassName('secondary-nav')[0];
const searchBar = document.getElementsByClassName('search-bar')[0];
var isMenuShowed = false;

function eventResetMenuIfClick(e){
  function fun() {
    switchButtonsAndShowMenu();
    document.removeEventListener('click', fun);
  }
  document.addEventListener('click', fun);
}

function switchButtonsAndShowMenu() {
  button.classList.toggle("d-hidden");
  button2.classList.toggle("d-block");
  menu.classList.toggle("d-block");

  var windowWidth = window.innerWidth;
  if (windowWidth < 569) {
    searchBar.classList.toggle("search-bar--reduced");
  }
}

function extendSearchBar() { 
  var windowWidth = window.innerWidth;
  var navList = document.getElementsByClassName("main-nav-list")[0];

  function hideNavBar () {
    buttons.classList.add("d-hidden");
    navList.classList.add("d-hidden");
  }
  function showNavBar () {
    buttons.classList.remove("d-hidden");
    navList.classList.remove("d-hidden");
  }

  if (windowWidth >= minWidth && windowWidth <=  699) {
    hideNavBar();
  }
  function toggleDisplayMenuAndButton() {
    if (window.innerWidth < minWidth || window.innerWidth >= 699) {
      showNavBar();
    }
    if (window.innerWidth >= minWidth && window.innerWidth < 699) {
      hideNavBar();
    }
  }
  window.addEventListener('resize', toggleDisplayMenuAndButton);
  searchBarInput.addEventListener('blur', function test2() {
    showNavBar();
    window.removeEventListener('resize', toggleDisplayMenuAndButton);
    this.removeEventListener('blur', test2);
  })
}

button.addEventListener('click', function(e) {
  switchButtonsAndShowMenu();
  eventResetMenuIfClick();
  e.stopPropagation();
});

const searchBarInput = document.getElementsByClassName('search-bar_input')[0];

searchBarInput.onfocus = extendSearchBar;

function mouseout () {
  var that = this;
  var i = that.scrollLeft/60;
  var j = 0;
  var cst =  that.scrollLeft/1000 + 1.5;

  var slideTimer = setInterval(function(){
    that.scrollLeft -= i;
    if (j >= 10 && i > 3) {
      i -= cst;
      j = 0;
    }
    if(that.scrollLeft === 0){
      window.clearInterval(slideTimer);
    }
    j += 1;
  }, 5);
}

document.getElementsByClassName('subnav-list')[0].onmouseleave = mouseout;


// 

function changeBoxShadow () {
  wrapper = document.getElementsByClassName('promo-box__input-wrapper')[0];
  wrapper.classList.toggle("js-box-shadow--black");
}

document.getElementsByClassName('promo-box__input')[0].onfocus = changeBoxShadow;
document.getElementsByClassName('promo-box__input')[0].onblur = changeBoxShadow;