const movieInput = $("input[type='text']");
const movieRating = $("input[type='number']");

$("input[type='submit']").on('click', function(evt){
    evt.preventDefault();
    const $newLi = $(`<li>Movie Name: ${movieInput[0].value} Rating: ${movieRating[0].value}</li>`).appendTo('ul');
    $('<button type="button">X</button>').appendTo($newLi);
})

$('div').on('click', function(evt){
    if (evt.target.tagName === 'BUTTON') {
        evt.target.parentElement.remove();
    }
})