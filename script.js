const search = document.getElementById('search')
const weather_info = document.querySelector('.info-box')
const temp_info = document.querySelector('.temp-info')


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


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
            .then(Response => Response.json())
            .then(json => {
                console.log(`temp is ${json.main.temp}`)
            })



        temp_info.innerHTML = capitalizeFirstLetter(city)



        weather_info.style.height = '75%'

    }

})



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
