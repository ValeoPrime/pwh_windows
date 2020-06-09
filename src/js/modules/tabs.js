const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
        const header = document.querySelector(headerSelector)
        const tabs = document.querySelectorAll(tabSelector)
        const contents = document.querySelectorAll(contentSelector)
        

        function hideTabContent() {
            contents.forEach(item => {
                item.style.display = 'none'
            })
            tabs.forEach(item => {
                item.classList.remove(activeClass)
            })

        }

        function showTabContent(i = 0) {
            contents[i].style.display = 'block'
            tabs[i].classList.add(activeClass)
        }

        hideTabContent()
        showTabContent()

        header.addEventListener('click', (e) => {

            if(e.target.classList.contains(tabSelector.slice(1)) || 
            e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){//Убираем точку функцией реплейс иначе контаинс не подхватит название класc либо можно реализовать через слайс
                tabs.forEach((item, i) => {
                    if(e.target == item || e.target.parentNode == item) {
                        hideTabContent()
                        showTabContent(i)
                    }
                })
            }
        })

}

export default tabs