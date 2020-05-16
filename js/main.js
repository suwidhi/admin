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
const pane_open = document.querySelectorAll('.pane-open');
const pane_close = document.querySelectorAll('.pane-close');
pane_open.forEach(element => {
    let target = document.querySelector("." + element.getAttribute('for'));
    element.addEventListener('click', function() {
        if(!target.classList.contains('active')) {
            closeAllPane();
            target.classList.add('active');
        }
    });    
});
pane_close.forEach(element => {
    let target = document.querySelector("." + element.getAttribute('for'));
    element.addEventListener('click', function(evt) { 
        evt.stopPropagation();
        target.classList.remove('active');

        resetMessaging();
    });
});
function closeAllPane() {
    pane_open.forEach(element => {
        let temp = document.querySelector('.' + element.getAttribute('for'));
        if(temp.classList.contains('active')) {
            temp.classList.remove('active');
        }
    });
}

//messaging function
const message_items = document.querySelectorAll('.prev-item');
const message = document.querySelector('.message');
message_items.forEach(element => {
    element.addEventListener('click', function() {
        if(!message.classList.contains('in-chat')){
            message.classList.add('in-chat');
        }
    });
});

//reset messaging to default behavior
function resetMessaging() {
    let msg = document.querySelector('.message');

    if(msg.classList.contains('in-chat')){
        msg.classList.remove('in-chat');
    }

    let inputs = msg.querySelectorAll('input[type=text]');
    inputs.forEach(element => {
        element.value = '';
    });
}

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