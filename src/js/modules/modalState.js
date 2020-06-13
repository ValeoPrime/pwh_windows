import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelectorAll('#width')
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')


    function actionToElems (event, elems, prop) {
        elems.forEach((item, i) => {
            item.addEventListener(event, () => {
                if(item.nodeName == 'SPAN') {
                    state[prop] = i

                } else if (item.nodeName == 'INPUT') {
                    if(item.getAttribute('type') === 'checkbox'){
                        i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
                        elems.forEach((box, c) => { //Сбрасываем все чекбоксы кроме нажатого в фолс
                            box.checked = false
                            if(c == i) {
                                box.checked = true
                            }
                        })
                    } else {
                        state[prop] = item.value
                    }
                } else if (item.nodeName == 'SELECT') {
                    state[prop] = item.value
                }
                  console.log(state);
                  
            })
        })
    }

    actionToElems('click', windowForm, 'form')
    actionToElems('input', windowWidth, 'width')
    actionToElems('input', windowHeight, 'height')
    actionToElems('change', windowType, 'type')
    actionToElems('change', windowProfile, 'profile')
    

}


export default changeModalState