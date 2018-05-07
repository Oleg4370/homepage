new WOW().init();

let wow = new WOW(
  {
    boxClass:     'wow2',
    animateClass: 'animated',
    callback:     fillCircle
  }
);
wow.init();

function fillCircle(box) {
  let cardContainer = box.querySelectorAll('.card-wrap');
  [].forEach.call(cardContainer, (item, i) => {
    let card = item.querySelector('.card');
    let animationClass = (i%2 === 0) ? 'fadeInRightBig' : 'fadeInLeftBig';
    setTimeout(()=>{
      item.classList.add('ready');
      card.className += ' animation-done '+animationClass;
    }, i*1000)
  });
}