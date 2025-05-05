document.getElementById('validate').addEventListener('click', function() {
    if(!this.form.fullname.value) {
        displayError(this.form.fullname)
        return false
    }
    
    if(!this.form.email.value) {
        displayError(this.form.email)
    }

})

const displayError = (element) => {

    const parent = element.parentElement
    const grandparent = parent.parentElement
    grandparent.classList.add('error')

    if(!element.nextElementSibling) {
        const errorMessage = document.createElement('div')
        errorMessage.className = 'error-message'
        errorMessage.textContent = 'Du skal udfylde dette felt'
    
        parent.appendChild(errorMessage)    
    }
    
    element.addEventListener('input', () => {
        if(element.nextElementSibling) {
            element.nextElementSibling.remove()
        }
        grandparent.classList.remove('error')
    })


}