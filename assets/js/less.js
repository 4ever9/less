console.log(99)

$(document).on('click', '#btn-dark', function(e) {
    e.preventDefault()
    $('body').toggleClass('dark')
})