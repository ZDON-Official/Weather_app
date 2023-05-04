const search = document.getElementById('search')
const weather_info = document.querySelector('.info-box')
const error = document.querySelector('.error')

// const sun = document.getElementById('sun')

search.addEventListener('click', () => {


    const APIkey = '09beed1c29719955be81f477691140e2'
    const city = document.querySelector('.search-input').value

    // sun.style.display = 'flex'


    if(!city){
        //TODO code here will return a 'not found' error

        weather_info.style.height = '0px'
    } else if(city){
        //TODO return the weather info


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`)
            .then(Response => Response.json())
            .then(json => {


                // Error 404
                console.log(json.cod)
                if(json.cod === '404'){
                    error.style.display = 'block'
                    error.innerHTML = 'Invalid location'
                    return
                }

                const temp_info = document.querySelector('.temp')
                const temp_desc = document.querySelector('.temp-desc')
                const humidity = document.querySelector('.humidity span')
                const wind = document.querySelector('.wind span')

                console.log(json.weather[0].main)

                // TODO font awesome not showing up [FIXED]
                switch (json.weather[0].main) {
                    case 'Clear':
                        // img.innerHTML = '<i class="fa-solid fa-sun"></i>'
                        var img = document.getElementById('sun')
                        img.style.display = 'flex'
                        break;

                    case 'Rain':
                        // img.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
                        var img = document.getElementById('rain')
                        img.style.display = 'flex'
                        break;

                    case 'Snow':
                        // img.innerHTML = '<i class="fa-solid fa-snowflake"></i>'
                        var img = document.getElementById('snow')
                        img.style.display = 'flex'
                        break;

                    case 'Clouds':
                        // img.innerHTML = `<i class="fa-solid fa-clouds"></i>`
                        var img = document.getElementById('cloud')
                        img.style.display = 'flex'
                        break;

                    case 'Haze':
                        img.innerHTML = '<i class="fa-solid fa-sun-haze"></i>'
                        var img = document.getElementById('haze')
                        img.style.display = 'flex'
                        break;

                    default:
                        img.innerHTML = '<i class="fa-solid fa-sun-haze"></i>';
                }

                temp_info.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`
                temp_desc.innerHTML = `${json.weather[0].description}`
                humidity.innerHTML = `${parseInt(json.main.humidity)}%`
                wind.innerHTML = `${parseInt(json.wind.speed)}M/h`


                weather_info.style.height = '75%'
            })
    }

})



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
