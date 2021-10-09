const scriptURL = 'https://script.google.com/macros/s/AKfycbzxlLusGdi0_bTuB3m7ds2NZHjb5W8JXmB4BQZ2Z2MZfdNY_wo/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});