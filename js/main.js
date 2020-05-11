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

//switch display between list and grid
const display_option = document.querySelectorAll('.display-option');
display_option.forEach(element => {
    element.addEventListener('click', function() {
        let target = document.querySelector('main .content');
        target.classList.remove('gridview');
        target.classList.remove('listview');
        target.classList.add(element.id);

        display_option.forEach(element => {
            element.classList.remove('active');
        });

        element.classList.add('active');
    });
});