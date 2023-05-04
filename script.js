const search = document.getElementById('search')
const weather_info = document.querySelector('.info-box')



var visible = false

search.addEventListener('click', () => {


    const APIkey = '09beed1c29719955be81f477691140e2'
    const city = document.querySelector('.search-input').value



    if(!city){
        //TODO code here will return a 'not found' error

        // console.log('null')



        weather_info.style.height = '0px'
    } else if(city){
        //TODO return the weather info


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`)
            .then(Response => Response.json())
            .then(json => {

                // `${parseInt(json.main.temp)}<span>°C</span>`



                const temp_info = document.querySelector('.temp')
                const temp_desc = document.querySelector('.temp-desc')
                const humidity = document.querySelector('.humidity span')
                const wind = document.querySelector('.wind span')
                const img = document.querySelector('.temp-img')

                console.log(json.weather[0].main)

                switch (json.weather[0].main) {
                    case 'Clear':
                        img.innerHTML = '<i class="fa-solid fa-sun"></i>'
                        break;

                    case 'Rain':
                        img.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
                        break;

                    case 'Snow':
                        img.innerHTML = '<i class="fa-solid fa-snowflake"></i>'
                        break;

                    case 'Clouds':
                        img.innerHTML = `<i class="fa-solid fa-clouds"></i>`
                        console.log('in clear')
                        console.log(img)
                        break;

                    case 'Haze':
                        img.innerHTML = '<i class="fa-solid fa-sun-haze"></i>'
                        break;

                    default:
                        img.innerHTML = '<i class="fa-solid fa-sun-haze"></i>';
                }




                temp_info.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`
                temp_desc.innerHTML = `${json.weather[0].description}`
                humidity.innerHTML = `${parseInt(json.main.humidity)}%`
                wind.innerHTML = `${parseInt(json.wind.speed)}M/h`
            })



        // temp_info.innerHTML = capitalizeFirstLetter(city)



        weather_info.style.height = '75%'

    }

})



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
