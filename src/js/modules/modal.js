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

const modals = (state = {}) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, overleyClose = true, validate = true) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const allModals = document.querySelectorAll('[data-modal]')
        const scrollWidth = calcScroll()

        trigger.forEach(item => { 
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                if(modalSelector == '.popup_calc_profile' && state.width > 0 && state.height > 0){
                    validate = true
                }
                if(modalSelector == '.popup_calc_end' && state.profile){
                    validate = true
                }

                if(validate) {
                    allModals.forEach(item => {
                        item.style.display = 'none'
                    })
    
                    modal.style.display = 'block'
                    document.body.style.overflow = 'hidden'
                    document.body.style.marginRight = `${scrollWidth}px`
                } else {
                    let messageStatus = document.createElement('div')
                    messageStatus.classList.add('status')
                    item.parentNode.appendChild(messageStatus)
                    messageStatus.textContent = 'Необходимо заполнить все поля'
                    setTimeout(() => {
                        messageStatus.remove()
                    }, 2000)
                }
                
            })
        })

        close.addEventListener('click', () => {
            allModals.forEach(item => {
                item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`
        })

        if(overleyClose) {
            modal.addEventListener('click', (event) => { //закрытие модалки при клике на подложку

                if (event.target === modal) {
                    allModals.forEach(item => {
                        item.style.display = 'none'
                    })

                    modal.style.display = 'none'
                    document.body.style.overflow = ''
                    document.body.style.marginRight = `0px`
                }
            })
        }
    }

    function showPopUpByTime (selector, time) {
        setTimeout( () => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `20px`
        }, time)

    }

    function calcScroll () {
        let div = document.createElement('div')

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)

        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()

        return scrollWidth
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false)
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, false)
    showPopUpByTime('[data-modal]', 3000)
}

export default modals
