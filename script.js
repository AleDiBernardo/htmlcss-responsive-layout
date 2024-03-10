const burger_button = document.querySelector('.button');
const sidebar = document.querySelector('.sidebar');
const hide_sidebar_btn = document.querySelector('.hide-sidebar');
const body = document.querySelector('body');
const navigate = document.querySelector('.navigate')

burger_button.addEventListener('click', function() {
    sidebar.classList.remove('hide');
    sidebar.classList.toggle('show');
    burger_button.classList.toggle('hide');
    body.classList.toggle('overflow-hidden');
    

});

hide_sidebar_btn.addEventListener('click', function() {
    sidebar.classList.remove('show');
    sidebar.classList.toggle('hide');
    burger_button.classList.remove('hide');
    body.classList.remove('overflow-hidden');

});

navigate.addEventListener('click', function() {
    sidebar.classList.remove('show');
    sidebar.classList.toggle('hide');

    burger_button.classList.remove('hide');
    burger_button.classList.toggle('show');

    body.classList.remove('overflow-hidden');

});
