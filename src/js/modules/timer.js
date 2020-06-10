const timer = (id, dedline) => {
    const addZero = (num) => {
        return num <= 9 ?  '0' + num :  num
    }


    const getRemainingTime = (endtime) => { //Высчитывает сколько времения осталось до переданной даты
        const t = Date.parse(endtime) - Date.parse(new Date())
        const seconds = Math.floor((t / 1000) % 60)
        const minutes = Math.floor((t/1000/60) % 60)
        const hours = Math.floor((t/(1000 * 60 * 60)) % 24)
        const days = Math.floor(t/(1000 * 60 * 60 * 24))

        return {
            "total": t,
            "seconds": seconds,
            "minutes": minutes,
            "hours": hours,
            "days": days
        }
    }

    const setTime = (selector, endtime) => {
        const timer = document.querySelector(selector)
        const days = timer.querySelector("#days")
        const hours = timer.querySelector("#hours")
        const minutes = timer.querySelector("#minutes")
        const seconds = timer.querySelector("#seconds")
        const timeInterval = setInterval( updateClock, 1000)


        function updateClock() {
            const t = getRemainingTime(endtime)

            days.innerHTML = addZero(t.days)
            hours.textContent = addZero(t.hours)
            minutes.textContent = addZero(t.minutes)
            seconds.innerHTML = addZero(t.seconds)

            if(t.total <= 0) {
                days.textContent = "00"
                hours.textContent = "00"
                minutes.textContent = "00"
                seconds.textContent = "00"

                clearInterval(timeInterval)
            }
        }
    }
    setTime(id, dedline)
}

export default timer