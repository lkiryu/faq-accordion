const plus = document.querySelectorAll('.fa-solid')

plus.forEach(function (i) {
    i.addEventListener('click', function () {
        i.classList.toggle('fa-minus')
        i.classList.toggle('fa-plus')
        i.parentElement.nextElementSibling.classList.toggle('none');
    })
})