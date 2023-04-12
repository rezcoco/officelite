const name = document.getElementById('name')
const email = document.getElementById('email')

const error = '<span class="error"><img src="./assets/sign-up/icon-cross.svg"></span>'

function createError(element) {
    const span = document.createElement('span')
    const img = document.createElement('img')

    span.classList.add('error')
    img.setAttribute('src', './assets/sign-up/icon-cross.svg')

    span.appendChild(img)
    element.parentElement.appendChild(span)
    element.parentElement.classList.add('alert')
}

function rmError(element) {
    const errorElement = document.querySelector('.error')
    errorElement?.remove()
    element.parentElement?.classList.remove('alert')
}

name.addEventListener('blur', () => {
    if (name.value === '' || name.value === null) {
        createError(name)
    } else {
        rmError(name)
    }
})

email.addEventListener('blur', () => {
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        createError(email)
    } else {
        rmError(email)
    }
})