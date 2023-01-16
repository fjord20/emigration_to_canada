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

//валидация формы авторизации


function userid_validation() {
const checkEmpty = document.getElementById('nameUser');
const checkEmptyname = document.getElementById('answer');
const emailValid = document.getElementById('email_not_valid');
const passEmpty = document.getElementById('pass_empty');
const uid_len = checkEmpty.value.length;
const uid_len_last = checkEmptyname.value.length;
const uid_len_pass = passEmpty.value.length;
const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
      if (uid_len == 0)  {
        document.getElementById('nameUser').style.borderColor = 'red';
      }
      
      else {
        document.getElementById('nameUser').style.borderColor = 'limegreen';
      }
  
      if (uid_len_last == 0) {
        document.getElementById('answer').style.borderColor = 'red';
        document.getElementById('numbers').style.borderColor = 'red';
      }
      
      else {
        document.getElementById('answer').style.borderColor = 'limegreen';
        document.getElementById('numbers').style.borderColor = 'limegreen';
      }
  
      if (uid_len_pass == 0) {
        document.getElementById('pass_empty').style.borderColor = 'red';
      }
      
      else {
        document.getElementById('pass_empty').style.borderColor = 'limegreen';
      }

      if (isEmailValid(emailValid.value)) {
        emailValid.style.borderColor = 'limegreen';
  
      } else {
        emailValid.style.borderColor = 'red';
      }
  
      function isEmailValid(value) {
        return re.test(value);
      }
  
  } 