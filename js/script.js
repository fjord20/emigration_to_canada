const sliders = document.querySelectorAll('.slider');

sliders.forEach(sliderEl => {
  const slider = new A11YSlider(sliderEl, {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    responsive: {
        320: {
          slidesToShow: 2,
          arrows: false
        },
        599: {
          disable: false, // slider disabled 960px to 1199px
          dots: true,
          slidesToShow: 3,
        },
        1200: {
          disable: false,
          slidesToShow: 4,
          dots: true // dots enabled 1200px and up
        }
      }
  });
});

// выпадающее меню
function dropCity() {
  document.getElementById('city').style.display = 'block';
  document.getElementById('arr_1').style.transform = 'rotate(180deg)';
  document.getElementById('arrow_1').style.fill = '#E55241';
  document.getElementById('town').style.color = '#E55241';
  document.getElementById('temp').style.color = '#E55241';
  document.getElementById('clouds').style.fill = '#E55241';
}

function dropLang() {
  document.getElementById('lang_menu').style.display = 'block';
  document.getElementById('arr_2').style.transform = 'rotate(180deg)';
  document.getElementById('arrow_2').style.fill = '#E55241';
  document.getElementById('lang').style.color = '#E55241';
  document.getElementById('earth').style.fill = '#E55241';
}

function dropAccount() {
  document.getElementById('account_menu').style.display = 'block';
  document.getElementById('arr_3').style.transform = 'rotate(180deg)';
  document.getElementById('arrow_3').style.fill = '#E55241';
  document.getElementById('acc').style.color = '#E55241';
  document.getElementById('user_1').style.fill = '#E55241';
  document.getElementById('user_2').style.fill = '#E55241';
 }

// закрытие меню по клику вне блока
  document.addEventListener("mouseup", function(event) {
  const cityShow = document.getElementById('city');
    if (!cityShow.contains(event.target)) {
        cityShow.style.display = 'none'
        document.getElementById('clouds').style.fill = '#3A3E48';
        document.getElementById('arr_1').style.transform = 'rotate(0deg)';
        document.getElementById('arrow_1').style.fill = '#3A3E48';
        document.getElementById('town').style.color = '#3A3E48';
        document.getElementById('temp').style.color = '#3A3E48';
        document.getElementById('clouds').style.fill = '#3A3E48';
    }
});

  document.addEventListener("mouseup", function(event) {
  const langShow = document.getElementById('lang_menu');
    if (!langShow.contains(event.target)) {
      langShow.style.display = 'none';
      document.getElementById('arr_2').style.transform = 'rotate(0deg)';
      document.getElementById('arrow_2').style.fill = '#3A3E48';
      document.getElementById('lang').style.color = '#3A3E48';
      document.getElementById('earth').style.fill = '#3A3E48';
    }
});

  document.addEventListener("mouseup", function(event) {
  const accShow = document.getElementById('account_menu');
    if (!accShow.contains(event.target)) {
      accShow.style.display = 'none';
      document.getElementById('arr_3').style.transform = 'rotate(0deg)';
      document.getElementById('arrow_3').style.fill = '#3A3E48';
      document.getElementById('acc').style.color = '#3A3E48';
      document.getElementById('user_1').style.fill = '#3A3E48';
      document.getElementById('user_2').style.fill = '#3A3E48';
    }
});

// поле поиск
    let isSearchFull = true;
    let searchShowFull = document.getElementById('btn_search');
    if (searchShowFull !== null) {
      searchShowFull.addEventListener('click', function() {
        if (isSearchFull) {
          document.getElementById('row_2').style.display = 'flex';
          document.getElementById('row_1').style.display = 'none';
          document.getElementById('btn_search').style.background = "url(/images/search_close.svg) no-repeat center";
          document.getElementById('header_search').style.width = '70%';
            isSearchFull = false;
          } 
          else {
            document.getElementById('row_2').style.display = 'none';
            document.getElementById('row_1').style.display = 'flex';
            document.getElementById('btn_search').style.background = "url(/images/search.png) no-repeat center";
            document.getElementById('header_search').style.width = 'auto';
            isSearchFull = true;
          } 
      });
    }

// поле поиск мобильная версия
    let isSearchShow = true;
    let searchShow = document.getElementById('btn_search_mobile');
    if (searchShow !== null) {
      searchShow.addEventListener('click', function() {
        if (isSearchShow) {
            document.getElementById('search_field_mobile').style.display = 'flex';
            document.getElementById('link_header').style.display = 'none';
            document.getElementById('left_side').style.display = 'none';
            document.getElementById('btn_search_mobile').style.background = "url(/images/search_close.svg) no-repeat center";
            document.querySelector('.navigation_right_side').style.gap = '0';
            isSearchShow = false;
          } 
          else {
            document.getElementById('search_field_mobile').style.display = 'none';
            document.getElementById('link_header').style.display = 'flex';
            document.getElementById('left_side').style.display = 'block';
            document.getElementById('btn_search_mobile').style.background = "url(/images/mobile/main/search.svg)";
            document.querySelector('.navigation_right_side').style.gap = '1.43rem';
            isSearchShow = true;
          } 
      });
    }

// поле аккаунт мобильная версия 
    let isAccShow = true;
    let AccShow = document.getElementById('btn_acc_mobile');
    if (AccShow !== null) {
      AccShow.addEventListener('click', function() {
        if (isAccShow) {
            document.getElementById('btn_search_mobile').style.display = 'none';
            document.getElementById('link_header').style.display = 'none';
            document.getElementById('left_side').style.display = 'none';
            document.getElementById('btn_acc_mobile').style.background = "url(/images/search_close.svg) no-repeat center";
            document.getElementById('user_3').style.fill = '#E55241'
            document.querySelector('.account_navigation').style.display = 'flex';
            document.querySelector('.right_side_btn_block').style.width = '100%';
            document.querySelector('.drop_menu_account_mobile').style.display = 'block';
            document.querySelector('.right_side_search_field').style.display = 'none';
            isAccShow = false;
          } 
          else {
            document.getElementById('btn_search_mobile').style.display = 'block';
            document.getElementById('link_header').style.display = 'flex';
            document.getElementById('left_side').style.display = 'flex';
            document.querySelector('.btn_block_btn_search').style.background = "url(/images/mobile/main/search.svg) no-repeat center";
            document.querySelector('.account_navigation').style.display = 'none';
            document.querySelector('.right_side_btn_block').style.width = 'auto';
            document.querySelector('.drop_menu_account_mobile').style.display = 'none';
            document.getElementById('btn_acc_mobile').style.background = "url(/images/mobile/main/account.svg)";
            isAccShow = true;
          } 
      });
    }

// скрывает меню блок вопроса на странице Иммиграция
function closeQuestion() {
    document.getElementById('btn').style.display = 'none';
}

//валидация формы авторизации
function userid_validation(event) {
    const checkEmpty = document.getElementById('nameUser');
    const checkEmptyname = document.getElementById('answer');
    const emailValid = document.getElementById('email_not_valid');
    const passEmpty = document.getElementById('pass_empty');
    const uid_len = checkEmpty.value.length;
    const uid_len_last = checkEmptyname.value.length;
    const uid_len_pass = passEmpty.value.length;
    const uid_len_email = emailValid.value.length;
    // const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
      if (uid_len == 0)  {
        checkEmpty.style.borderColor = '#E55241';
        checkEmpty.style.borderWidth = '1px';
        checkEmpty.placeholder = 'Введите имя';
        event.preventDefault();
      }
      
      else {
        checkEmpty.style.borderColor = 'limegreen';
      }
  
      if (uid_len_last == 0) {
        checkEmptyname.style.borderColor = '#E55241';
        checkEmptyname.style.borderWidth = '1px';
        checkEmptyname.placeholder = 'Введите результат';
        document.getElementById('numbers').style.borderColor = '#E55241';
        document.getElementById('numbers').style.borderWidth = '1px';
        event.preventDefault();
      }
      
      else {
        checkEmptyname.style.borderColor = 'limegreen';
        document.getElementById('numbers').style.borderColor = 'limegreen';
      }
  
      if (uid_len_pass == 0) {
        passEmpty.style.borderColor = '#E55241';
        passEmpty.style.borderWidth = '1px'
        passEmpty.placeholder = 'Введите пароль';
        event.preventDefault();
      }
      
      else {
        passEmpty.style.borderColor = 'limegreen';
      }

      if (uid_len_email == 0) {
        emailValid.style.borderColor = '#E55241';
        emailValid.style.borderWidth = '1px';
        emailValid.placeholder = 'Введите e-mail';
        event.preventDefault();
      }
      
      else {
        emailValid.style.borderColor = 'limegreen';
      }

      // if (isEmailValid(emailValid.value)) {
      //   emailValid.style.borderColor = 'limegreen';
  
      // } else {
      //   emailValid.style.borderColor = '#E55241';
      //   emailValid.style.borderWidth = '1px';
      //   alert('введите правильный адрес электронной почты');
      // }
  
      // function isEmailValid(value) {
      //   return re.test(value);
      // }
  } 

//валидация формы авторизации
function userid_validation_(event) {
  const checkEmpty = document.getElementById('nameUser_1');
  const checkEmptyname = document.getElementById('answer_1');
  const emailValid = document.getElementById('email_not_valid_1');
  const passEmpty = document.getElementById('pass_empty_1');
  const uid_len = checkEmpty.value.length;
  const uid_len_last = checkEmptyname.value.length;
  const uid_len_pass = passEmpty.value.length;
  const uid_len_email = emailValid.value.length;
  // const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    
        if (uid_len == 0)  {
          checkEmpty.style.borderColor = '#E55241';
          checkEmpty.style.borderWidth = '1px';
          checkEmpty.placeholder = 'Введите имя';
          event.preventDefault();
        }
        
        else {
          checkEmpty.style.borderColor = 'limegreen';
        }
    
        if (uid_len_last == 0) {
          checkEmptyname.style.borderColor = '#E55241';
          checkEmptyname.style.borderWidth = '1px';
          checkEmptyname.placeholder = 'Введите результат';
          document.getElementById('numbers_1').style.borderColor = '#E55241';
          document.getElementById('numbers_1').style.borderWidth = '1px';
          event.preventDefault();
        }
        
        else {
          checkEmptyname.style.borderColor = 'limegreen';
          document.getElementById('numbers_1').style.borderColor = 'limegreen';
        }
    
        if (uid_len_pass == 0) {
          passEmpty.style.borderColor = '#E55241';
          passEmpty.style.borderWidth = '1px'
          passEmpty.placeholder = 'Введите пароль';
          event.preventDefault();
        }
        
        else {
          passEmpty.style.borderColor = 'limegreen';
        }
  
        if (uid_len_email == 0) {
          emailValid.style.borderColor = '#E55241';
          emailValid.style.borderWidth = '1px';
          emailValid.placeholder = 'Введите e-mail';
          event.preventDefault();
        }
        
        else {
          emailValid.style.borderColor = 'limegreen';
        }
    } 

//валидация формы входа в личный кабинет
function enter_validation(event) {
  const emailValid = document.getElementById('email_not_valid');
  const passEmpty = document.getElementById('pass_empty');
  const uid_len_pass = passEmpty.value.length;
  const uid_len_email = emailValid.value.length;
    
    if (uid_len_pass == 0) {
      passEmpty.style.borderColor = '#E55241';
      passEmpty.style.borderWidth = '1px'
      passEmpty.placeholder = 'Введите пароль';
      event.preventDefault();
    }
    
    else {
      passEmpty.style.borderColor = 'limegreen';
    }

    if (uid_len_email == 0) {
      emailValid.style.borderColor = '#E55241';
      emailValid.style.borderWidth = '1px';
      emailValid.placeholder = 'Введите e-mail';
      event.preventDefault();
    }
    
    else {
      emailValid.style.borderColor = 'limegreen';
    }
}

//валидация формы входа восстановления пароля
function restore_pass(event) {
  const emailValid = document.getElementById('email_not_valid_2');
  const uid_len_email = emailValid.value.length;
    if (uid_len_email == 0) {
      emailValid.style.borderColor = '#E55241';
      emailValid.style.borderWidth = '1px';
      emailValid.placeholder = 'Введите e-mail';
      event.preventDefault();
    }
    
    else {
      emailValid.style.borderColor = 'limegreen';
    }
}

  // появление формы для ввода комментариев
    let isTextShow = false;
    let fieldShow = document.getElementById('openText');
    if (fieldShow !== null) {
      fieldShow.addEventListener('click', function() {
        if (isTextShow) {
            document.getElementById('comm').style.display = 'none';
            fieldShow.style.backgroundColor = '#E55241';
            fieldShow.style.color = '#FFF';
            isTextShow = false;
          } 
          else {
            document.getElementById('comm').style.display = 'flex';
            fieldShow.style.backgroundColor = '#F4F4F4';
            fieldShow.style.color = '#A6A6A6';
            isTextShow = true;
          } 
      });
    }

//отображение дополнительных комментариев
    let isCommMore = false;
    let commMore = document.querySelector('.show_more');

      if (commMore !== null) {
          commMore.addEventListener('click', function() {
          if (isCommMore) {
              document.querySelector('.hidden').style.display = 'none';
              commMore.style.backgroundColor = '#E55241';
              commMore.style.color = '#FFF';
              commMore.innerText = 'Показать еще';
              isCommMore = false;
            } 
            else {
              document.querySelector('.hidden').style.display = 'flex';
              commMore.style.backgroundColor = '#F4F4F4';
              commMore.style.color = '#A6A6A6';
              commMore.style.border = 'none';
              commMore.innerText = 'Скрыть комментарии';
              isCommMore = true;
              } 
          });
        }

// меню гамбургер
  function hamBurger() {
    document.getElementById('top').style.display = 'flex';
    document.getElementById('wide').style.display = 'flex';
    // document.querySelector('main').style.display = 'none';
    // document.querySelector('footer').style.display = 'none';
    document.getElementById('ham').style.display = 'none';
    document.getElementById('ham_close').style.display = 'block';
  }

  function hamBurger_close() {
    document.getElementById('top').style.display = 'none';
    document.getElementById('wide').style.display = 'none';
    // document.querySelector('main').style.display = 'block';
    // document.querySelector('footer').style.display = 'block';
    document.getElementById('ham').style.display = 'block';
    document.getElementById('ham_close').style.display = 'none';
  }

//добавление в закладки сайта
function add_favorite(a) {
  title=document.title;
  url=document.location;
  try {
    // Internet Explorer
    eval("window.external.AddFa-vorite(url, title)".replace(/-/g,''));
  }
  catch (e) {
    try {
      // Mozilla
      window.sidebar.addPanel(title, url, "");
    }
    catch (e) {
      // Opera
      if (typeof(opera)=="object") {
        a.rel="sidebar";
        a.title=title;
        a.url=url;
        return true;
      }
      else {
        // Остальные браузеры
        alert('Нажмите Ctrl + D, чтобы добавить страницу в закладки');
      }
    }
  }
  return false;
}
//aккордион
  let acc = document.getElementsByClassName("menu_row_mobile");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active_");
      let drop_menu_mobile = this.nextElementSibling;
      if (drop_menu_mobile.style.display === "block") {
        drop_menu_mobile.style.display = "none";
      } else {
        drop_menu_mobile.style.display = "block";
      }
    });
  }



  
