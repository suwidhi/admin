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

//messaging and notifications open close behavior
const pane_open = document.querySelector('.pane-open');
const pane_close = document.querySelector('.pane-close');
pane_open.forEach(element => {
    let target = document.querySelector("." + element.getAttribute('for'));
    element.addEventListener('click', function() {
        if(!target.classList.contains('active')) {target.classList.add('active');}
    });    
});
pane_close.forEach(element => {
    let target = document.querySelector("." + element.getAttribute('for'));
    message_close.addEventListener('click', function(evt) {
        evt.stopPropagation();
        target.classList.remove('active');
    });
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