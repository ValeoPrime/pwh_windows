const forms = () => {
    const AllForms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '') //Фильтрация ввода, регулярка заменит все кроме цифр на пустое место
        })
    })

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

        return await res.texy()
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

            const formData = new FormData(item)

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
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