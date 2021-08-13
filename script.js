const btn = document.querySelector('.btn')
const inputValue = document.querySelector('.inputValue')
const cityName = document.querySelector('.cityName')
const desc = document.querySelector('.description')
const temp = document.querySelector('.temperature')

btn.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4411b9611d7af047c339ce6fd343a2c6')
.then(res => res.json())
.then(data => {
    cityName.innerHTML = data.name
    desc.innerHTML = data.weather[0].description
    var tempCelcius = Math.ceil((data.main.temp)-273.15)
    temp.innerHTML = tempCelcius + " Celcius"
})
.catch(error => alert('Wrong City Name'))
})