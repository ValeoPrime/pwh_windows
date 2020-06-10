import checkNumInputs from './checkNumInputs'

const forms = (state) => {
    const AllForms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')

    checkNumInputs('input[name="user_phone"]')//Фильтрация ввода, регулярка заменяет все кроме цифр на пустое место

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы вам перезвоним!',
        error: 'Что-то пошло не так'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading

        let res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
    }

    AllForms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()

            //Блок со статусом отправки данных из формы
            let messageStatus = document.createElement('div')
            messageStatus.classList.add('status')
            item.appendChild(messageStatus)
            //end

            console.log('Атрибут айтема', item.getAttribute("data-calc"));
            
            const formData = new FormData(item)
            if(item.getAttribute('data-calc') === 'end') { // Когда отправляем последнюю форму закидываем в форм дата обьект собранных данных
                
                for(let key in state) {
                    formData.append(key, state[key]) //Запись в форм дата ключа и свойства их стейта по ключу
                }

            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log('Ответ сервера',res);
                    messageStatus.textContent = message.success
                })
                .catch((e) => {
                    console.log(e);
                    messageStatus.textContent = message.error
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        messageStatus.remove()
                    }, 3000)
                })
        })
    })
}

export default forms