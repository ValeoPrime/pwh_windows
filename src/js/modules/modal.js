// const modal = document.querySelector('.popup_engineer')
// const body = document.querySelector('body')
// const popup = document.querySelector('.popup')


// body.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log(event.target);

//     if (event.target.classList.contains('popup_engineer_btn')) {
//         modal.style.display = 'block'
//         document.body.style.overflow = 'hidden'
//     }

//     if (event.target.classList.contains('popup_engineer') || event.target.name === 'submit' || event.target.classList.contains('popup_close')) {
//         modal.style.display = 'none'
//         document.body.style.overflow = ''
//     }

//     if (event.target.classList.contains('phone_link')) {
//         popup.style.display = 'block'
//         document.body.style.overflow = 'hidden'
//     }

//     if (event.target.classList.contains('popup') || event.target.name === 'submit' || event.target.classList.contains('popup_close')) {
//         popup.style.display = 'none'
//         document.body.style.overflow = ''
//     }

// })

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)

        trigger.forEach(item => { 
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })

        modal.addEventListener('click', () => {
            if (event.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = ''
            }

        })
    }

    function showPopUpByTime (selector, time) {
        setTimeout( () => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)

    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    // showPopUpByTime('.popup', 60000)
}

export default modals
