const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    close_menu = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close_menu.addEventListener('click', () => {
    menu.classList.remove('active');
})

const counters = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.skills__upper-skale');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
    console.log(item.innerHTML);
})
  