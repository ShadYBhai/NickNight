const key = '3a5d426f244241bbb67eb781b28f9e18'

const base_url = `https://api.rawg.io/api/`;

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1;
    if(month<10){
        return `0${month}`
    }
    else{
        return month
    }
}
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`
    }
    else{
        return day
    }
}
//Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear =`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

console.log(currentDate)
console.log(nextYear)

const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`

console.log(popularGamesURL())