const checkNumInputs = (selector) => {
    const nodes = document.querySelectorAll(selector)

    nodes.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '') 
        })
    })
}

export default checkNumInputs