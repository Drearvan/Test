let days = ["Воскресенье", "Понедельник", "Вторник", "Среда","Четверг", "Пятница", "Суббота"]
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня","Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
function getDayInfo(T) {
    let t = T.slice(6)+"-"+T.slice(3,5)+"-"+T.slice(0,2)
    let time = new Date(t)
    let day = days[time.getDay()]
    let week = time.getDate()
    if (week<=7) {
        week = 1
    } else if (week<=14) {
        week = 2
    } else if (week<=21) {
        week = 3
    } else {
        week = 4
    }
    let month = months[time.getMonth()]
    let year = time.getFullYear()
    console.log(`${day}, ${week} неделя ${month} ${year} года`)
}
getDayInfo("01.01.2022")
getDayInfo("15.12.2021")