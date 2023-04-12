const select = document.querySelector('.custom-select-display')
const selectHidden = document.querySelector('.custom-select-hidden')
const selectOption = document.querySelectorAll('.custom-select-option')
const selectedPlan = document.querySelector('.custom-select-text-display')
const selectedPrice = document.querySelector('.custom-select-price-display')

const checklist = document.querySelectorAll('.checklist')
const arrow = document.querySelector('.custom-select-arrow')

select.addEventListener('click', function(e) {
    arrow.classList.toggle('rotate')
    selectHidden.classList.toggle('active')
})

selectOption.forEach((select) => {
    select.addEventListener('click', function(e) {
        selectOption.forEach((checklist) => checklist.classList.remove('selected'))
        this.classList.add('selected')
        selectHidden.classList.toggle('active')
        arrow.classList.toggle('rotate')
        selectedPlan.textContent = this.childNodes[1].childNodes[1].innerText
        selectedPrice.textContent =  this.childNodes[1].childNodes[3].innerText

        const data = this.getAttribute('data-value')

        this.parentElement.parentElement.setAttribute('data-value', data)
    })
})