const slider = new A11YSlider(document.querySelector('.slider'), {
    dots: true,
    customPaging: function(index, a11ySlider) {
        return '<button class="mycustombtn">' + index + '</button>';
    }
  });

// const track = document.querySelector('.popular_offers_carusel_track');
// const slides = Array.from(track.children);
// const dotsNav = document.querySelector('.popular_offers_carusel_nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// // slides[0].style.left = slideWidth*0 + 'px';
// // slides[1].style.left = slideWidth*1 + 'px';
// // slides[2].style.left = slideWidth*2 + 'px';
// // slides[3].style.left = slideWidth*3 + 'px';
// // slides[4].style.left = slideWidth*4 + 'px';

// const setSlidePositions = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };


// slides.forEach(setSlidePositions);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left +')'
//     currentSlide.classList.remove('current_slide');
//     targetSlide.classList.add('current_slide');
// };

// const updateDots = (currentDot, targetDot) => {  
//     currentDot.classList.remove('current_slide');
//     targetDot.classList.add('current_slide');
// };

// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');
    
//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current_slide');
//     const currentDot = dotsNav.querySelector('.current_slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];
//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);

// });