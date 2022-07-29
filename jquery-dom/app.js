$(function(){
    console.log("Let's get ready to party with jQuery!");
})

$('img').addClass('image-center');

let $listP = $('p');
$listP.get($listP.length - 1).remove();

$('h1').css('font-size', Math.random() * 100 + 'px');

$('<li>gl;jkdfhlijsdilghildsfhgilhsdfijn</li>').appendTo('ol');

$('li').remove();

$('<p>I am very sorry that this list exists please continue onward with your life</p>').appendTo('ol');

let colors = $('input');

colors.on("input", function() {
    $('body').css('background-color', `rgb(${colors[0].value},${colors[1].value},${colors[2].value})`);
});

$('img').on('click', function(){
    $(this).remove();
});