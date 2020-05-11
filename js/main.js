// user menu action
const user_menu = document.querySelector('.user-menu');
const user_menu_icon = user_menu.querySelector('div');
user_menu.addEventListener('click', function(){
    this.classList.toggle('active');
    if(user_menu_icon.classList.contains('icon-hamburger')) {
        user_menu_icon.classList.replace('icon-hamburger', 'icon-close');
    } else {
        user_menu_icon.classList.replace('icon-close', 'icon-hamburger');
    }
});