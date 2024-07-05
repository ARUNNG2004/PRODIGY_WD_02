// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let api_key="b3e6cb4e05d5ba69e8f0b154c7e9534c";

getweatherdata= (city)=>{
    const URL='https://api.openweathermap.org/data/2.5/weather'

    const Full_url=`${URL}?q=${city}&appid=${api_key}`

    const weatherPromisis=fetch(Full_url)

    return weatherPromisis.then((response)=>{
        return response.json()
    })
}

function KeyPress(event) {
    if (event.key === 'Enter') {
        searchcity();
    }
  }
function searchcity(){
    const city=document.getElementById('input').value;

    getweatherdata(city)
    .then((response)=>{
        showweather(response)
    })
    .catch(()=>{
        console.log(error)
    })

}
showweather=(weatherData)=>{

document.getElementById('location').innerText = weatherData.name;
document.getElementById('weathertype').innerText=weatherData.weather[0].main;
document.getElementById('temperature').innerText=weatherData.main.temp
document.getElementById('max-temp').innerText=weatherData.main.temp_max
document.getElementById('min-temp').innerText=weatherData.main.temp_min
}
