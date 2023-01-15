const sliders = document.querySelectorAll('.slider');

sliders.forEach(sliderEl => {
  const slider = new A11YSlider(sliderEl, {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    responsive: {
        768: {
          slidesToShow: 2,
          arrows: false
        },
        960: {
          disable: false, // slider disabled 960px to 1199px
          dots: true
        },
        1200: {
          disable: false,
          slidesToShow: 4,
          dots: true // dots enabled 1200px and up
        }
      }
  });
});

function dropCity() {
    document.getElementById("city").style.display = "block";
}

// скрывает меню блок вопроса на странице Иммиграция
function closeQuestion() {
    document.getElementById("btn").style.display = 'none';
}


