// const slides = document.querySelector(".slide")
// const nextBtn = document.querySelector(".nextBtn")
// const prevBtn = document.querySelector(".prevBtn")

// slide.forEach(function(slide,index){
//     slide.style.left=`${index * 100}%`
// })

// let counter = 0;
// nextBtn.addEventListener('click',function(){
//     counter++;
//     carousel()
// })


// prevBtn.addEventListener('click',function(){
//     counter--;
//     carousel();
// })

// function carousel(){
//     slides.forEach(function(slide){
//         slide.style.transform=`translateX(-${counter *100}%)`
//     })
// }

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide'); // <-- select ALL
  const nextBtn = document.querySelector('.nextBtn');
  const prevBtn = document.querySelector('.prevBtn');

  // place slides side-by-side
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  let counter = 0;

  nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
  });

  prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
  });

  function carousel() {
    // clamp the counter so it doesn't go past ends
    const maxIndex = slides.length - 1;
    if (counter < 0) counter = 0;
    if (counter > maxIndex) counter = maxIndex;

    slides.forEach(slide => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
});
