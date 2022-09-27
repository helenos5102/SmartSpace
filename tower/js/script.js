const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});

// tabs
// зібрати усі об'єкти з класом
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');

// відслідковуємо на клік
document.addEventListener("click", function (e) {
  // отримати ел., який натиснули
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newtActiveIndex = null;
  // якщо є клік на .tabs-deals__button, то...
  if (targetElement.closest('.tabs-deals__button')) {
    // проміжна перевірка
    // console.log('Tak');
    tabNavItems.forEach((tabNavItems, index) => {
      // якщо є клас active, то ...
      if (tabNavItems.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItems.classList.remove('active');
      }
      if (tabNavItems === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});