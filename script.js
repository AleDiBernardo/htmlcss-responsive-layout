const burger_button = document.querySelector('.button');
const sidebar = document.querySelector('.sidebar');
const hide_sidebar_btn = document.querySelector('.hide-sidebar');


burger_button.addEventListener('click', function() {
    sidebar.classList.remove('hide');
    sidebar.classList.toggle('show');
    burger_button.classList.toggle('hide');
});

hide_sidebar_btn.addEventListener('click', function() {
    sidebar.classList.remove('show');
    sidebar.classList.toggle('hide');
    burger_button.classList.remove('hide');
});
