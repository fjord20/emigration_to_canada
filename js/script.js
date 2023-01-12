
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    responsive: {
        768: {
          slidesToShow: 2,
          arrows: false
        },
        960: {
          disable: true // slider disabled 960px to 1199px
        },
        1280: {
          disable: false,
          slidesToShow: 4,
          dots: true // dots enabled 1200px and up
        }
      }
  });


function dropCity() {
    document.getElementById("city").style.display = "block";
}

// скрывает меню блок вопроса на странице Иммиграция
function closeQuestion() {
    document.getElementById("btn").style.display = 'none';
}


