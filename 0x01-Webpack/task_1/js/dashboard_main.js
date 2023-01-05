import $ from "jquery";
import debounce from "lodash";

let count = 0;

function update_counter(){
    count ++;
    $('#count').text(`${count} clicks on the button`);
}

const $button = $('<button>Click here to get started</button>').on(
    'click',
    debounce(update_counter, 500, {leading: true, trailing: false})
    );
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append($button);
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');
