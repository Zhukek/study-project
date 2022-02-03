const headerButton = document.querySelector('.header__button')

const landscapesContainer = document.querySelector('.landscape__types')
const landscapesButtonLeft = document.querySelector('.landscape__button_prev')
const landscapesButtonRight = document.querySelector('.landscape__button_next')

const bikeLinkFirst = document.querySelector('.bikes__link_class_main')
const bikePictureFirst = bikeLinkFirst.querySelector('.bikes__bike-image')

const bikeLinkSecond = document.querySelector('.bikes__link_class_second')
const bikePictureSecond = bikeLinkSecond.querySelector('.bikes__bike-image')

const bikeLinkThird = document.querySelector('.bikes__link_class_last')
const bikePictureThird = bikeLinkThird.querySelector('.bikes__bike-image')

const buttonBike = document.querySelectorAll('.bikes__button')
const buttonSelect = document.querySelectorAll('.bikes__select-button')
const bikesMenu = document.querySelector('.bikes__menu')
const bikesOpenButton = document.querySelector('.bikes__open-button')

const themeSwitcher = document.querySelector('.theme-switcher__button')
const submitButton = document.querySelector('.footer__submit-button')
const sendMail = document.querySelector('#mailInput')
const mailForm = document.querySelector('#mailForm')

let darkTheme = false

const bikes = {
  TT: {
    first: {
      img: './images/TT_1.png',
      link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
      name: 'Specialized S-Works Shiv'
    },
    second: {
      img: './images/TT_2.png',
      link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
      name: 'BMC Timemachine 01 ONE'
    },
    third: {
      img: './images/TT_3.png',
      link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
      name: 'Cervelo P-Series'
    }
  },
  gravel: {
    first: {
      img: './images/Gravel_1.png',
      link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
      name: 'Cervelo Aspero GRX 810'
    },
    second: {
      img: './images/Gravel_2.png',
      link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
      name: 'Specialized S-Works Diverge'
    },
    third: {
      img: './images/Gravel_3.png',
      link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
      name: 'Cannondale Topstone Lefty 3'
    }
  },
  highway: {
    first: {
      img: './images/highway_1.png',
      link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
      name: 'Cervelo Caledonia-5'
    },
    second: {
      img: './images/highway_2.png',
      link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
      name: 'Cannondale Systemsix Himod'
    },
    third: {
      img: './images/highway_3.png',
      link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
      name: 'Trek Domane SL-7'
    }
  }
}

function appearSwitcher () {
  document.querySelector('.theme-switcher').classList.toggle('theme-switcher_open')
} /* отображает/убирает переключатель темы */

headerButton.addEventListener('click', function() {
  document.querySelector('.header').classList.toggle('header_open')
  headerButton.classList.toggle('header__button_open')
  if (headerButton.classList.contains('header__button_open')) {
    setTimeout(appearSwitcher, 500)
  } else {
    appearSwitcher()
  }
}) /* открывает/закрывает верхнее меню */

function removeSlideLeft () {
  landscapesContainer.classList.remove('landscape__types_animation_on', 'landscape__types_move_left')
  const firstCard = landscapesContainer.firstElementChild
  landscapesContainer.append(firstCard)
} /* Убираем стили для слайда влево и перекидываем первую карточку в конец */

function animateSlideRight () {
  landscapesContainer.classList.add('landscape__types_animation_on')
  landscapesContainer.classList.remove('landscape__types_move_left')
} /* функция используется для слайда вправо */

function removeAnimationRight () {
  landscapesContainer.classList.remove('landscape__types_animation_on')
} /* функция используется для слайда вправо */

function slideRight () {
  landscapesContainer.classList.add('landscape__types_move_left')
  const lastCard = landscapesContainer.lastElementChild
  landscapesContainer.prepend(lastCard)
  setTimeout(animateSlideRight, 1)
  setTimeout(removeAnimationRight, 1000)
} /*слайд вправо */
function slideLeft () {
  landscapesContainer.classList.add('landscape__types_animation_on', 'landscape__types_move_left')
  setTimeout(removeSlideLeft,1000)
} /*слайд влево */

function changeActive () {
  const activeContainer = landscapesContainer.querySelector('.landscape__type_active')
  activeContainer.classList.remove('landscape__type_active')
  function addActive () {
    landscapesContainer.firstElementChild.classList.add('landscape__type_active')
  }
  setTimeout(addActive, 1)
} /* Подсвечивает надписи только у активной карточки */

landscapesButtonLeft.addEventListener('click', function() {
  slideLeft ()
  setTimeout(changeActive, 1001)
})
landscapesButtonRight.addEventListener('click', function() {
  slideRight ()
  setTimeout(changeActive, 1001)
})

function changeBikes (style) {
  bikeLinkFirst.href = bikes[style].first.link
  bikeLinkFirst.lastElementChild.textContent = bikes[style].first.name
  bikePictureFirst.src = bikes[style].first.img

  bikeLinkSecond.href = bikes[style].second.link
  bikeLinkSecond.lastElementChild.textContent = bikes[style].second.name
  bikePictureSecond.src = bikes[style].second.img

  bikeLinkThird.href = bikes[style].third.link
  bikeLinkThird.lastElementChild.textContent = bikes[style].third.name
  bikePictureThird.src = bikes[style].third.img
} /* Меняет карточки байков в зависимости от стиля */

changeBikes ('highway') /* установить изначально тему "шоссе" */

function changeTheme (theme) {
  let activeButton = document.querySelector(`.${theme}`)
  activeButton.classList.remove(`${theme}`)
} /* Убирает выбранную тему */

buttonBike.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    changeTheme ('bikes__button_active')
    evt.target.classList.add('bikes__button_active')
    const style = evt.target.id
    changeBikes (style)
    changeTheme ('bikes__select-button_active')
    document.querySelector('#first').classList.add('bikes__select-button_active')
    bikesMenu.classList.remove('bikes__menu_open')
    bikesOpenButton.classList.remove('bikes__open-button_open')
  })
}) /* Для выбора стиля байков */

function selectBike (style, num) {
  bikeLinkFirst.href = bikes[style][num].link
  bikeLinkFirst.lastElementChild.textContent = bikes[style][num].name
  bikePictureFirst.src = bikes[style][num].img
} /* Для выбора байка при маленьком разрешении */

buttonSelect.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    changeTheme ('bikes__select-button_active')
    evt.target.classList.add('bikes__select-button_active')
    const style = document.querySelector('.bikes__button_active').id
    const buttonNum = evt.target.id
    selectBike (style, buttonNum)
  })
}) /* навесить selectBike на все кнопки и добавить смену классов */

bikesOpenButton.addEventListener('click', function() {
  bikesMenu.classList.toggle('bikes__menu_open')
  bikesOpenButton.classList.toggle('bikes__open-button_open')
}) /* Открывает/закрывает меню выбора стиля */

sendMail.addEventListener('blur', function() {
  if (sendMail.value !== '') {
    submitButton.classList.add('footer__submit-button_active')
  } else{
    submitButton.classList.remove('footer__submit-button_active')
  }
})  /* Отслеживает выход из инпут */

mailForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  sendMail.value = 'Круто!'
  submitButton.classList.remove('footer__submit-button_active')
  sendMail.disabled = true;
})

themeSwitcher.addEventListener('click', function () {
  if (darkTheme === false) {
    darkTheme = true
  } else {
    darkTheme = false
  }
  themeSwitcher.classList.toggle('theme-switcher__button_theme_dark')
  function changeColor (item) {
    let itemsToChange = document.querySelectorAll(`.${item}`)
    itemsToChange.forEach(function(elem) {
      elem.classList.toggle(`${item}_theme_dark`)
    })
  }
  changeColor ('body')
  changeColor ('header')
  changeColor ('header__link')
  changeColor ('header__button')
  changeColor ('content__title')
  changeColor ('content__text')
  changeColor ('content__sign')
  changeColor ('content__quote-text')
  changeColor ('content__quote-author')
  changeColor ('content__quote-prof')
  changeColor ('landscape__title')
  changeColor ('landscape__description')
  changeColor ('landscape__button')
  changeColor ('landscape__button_next')
  changeColor ('landscape__button_prev')
  changeColor ('bikes__title')
  changeColor ('bikes__menu')
  changeColor ('bikes__bike-name')
  changeColor ('bikes__button')
  changeColor ('bikes__button_active')
  changeColor ('training__title')
  changeColor ('training__link')
  changeColor ('training__text')
  changeColor ('footer')
  changeColor ('footer__subscribe')
  changeColor ('footer__mail-input')
  changeColor ('footer__submit-button')
})
