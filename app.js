const Button = document.querySelector('button')
const darcButton = document.querySelector('.darc-button')
const body = document.querySelector('body')
const mainHeader = document.querySelector('.main-header')
const mainInput = document.querySelector('.main-input')
const searchInput = document.querySelector('.search-input')
const select = document.querySelector('select')
const search = document.querySelector('.search')
const mainCard = document.querySelectorAll('.main-card_body')

Button.addEventListener('click', darcbtn)

function darcbtn() {
  body.classList.toggle('body-background')
  mainHeader.classList.toggle('activ1')
  darcButton.classList.toggle('activ2')
  mainInput.classList.toggle('activ3')
  searchInput.classList.toggle('activ4')
  select.classList.toggle('activ5')
  search.classList.remove('search')
  search.classList.add('black')
}

window.addEventListener('scroll', animationNav)

function animationNav() {
  if (window.scrollY > mainHeader.offsetHeight) {
    mainHeader.classList.add('navtop')
    darcButton.classList.add('navtop')
  } else {
    mainHeader.classList.remove('navtop')
    darcButton.classList.remove('navtop')
  }
}