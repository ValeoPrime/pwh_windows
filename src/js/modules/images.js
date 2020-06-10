const bigImage = (selector) => {
    const imgSection = document.querySelector(selector)
    const imgPopup = document.createElement('div')
    const bigImg = document.createElement('img')

    imgPopup.classList.add('popup')

    imgSection.appendChild(imgPopup)

    imgPopup.style.justifyContent = 'center'
    imgPopup.style.alignItems = 'center'
    imgPopup.style.display = 'none'
    bigImg.style.maxHeight = '90vh'
    bigImg.style.maxWidth = '90vh'
    bigImg.style.borderRadius = '5px'

    imgPopup.appendChild(bigImg)

    imgSection.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'
            document.body.style.overflow = 'hidden'

            const path = e.target.parentNode.getAttribute('href')
            bigImg.setAttribute('src', path)
        }
        if(e.target.classList.contains('popup')){
            imgPopup.style.display = 'none'
            document.body.style.overflow = ''
        }
        
    })



}

export default bigImage