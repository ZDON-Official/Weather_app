const search = document.getElementById('search')
const weather_info = document.querySelector('.info-box')
const temp_info = document.querySelector('.temp-info')


var visible = false

search.addEventListener('click', () => {

    // console.log('button clicked')

    const city = document.querySelector('.search-input').value

    console.log(`city is ${city}`)



    if(!city){
        //TODO code here will return a 'not found' error

        console.log('null')



        weather_info.style.height = '0px'
    } else if(city){
        //TODO return the weather info
        temp_info.innerHTML = capitalizeFirstLetter(city)



        weather_info.style.height = '75%'

    }

})



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
