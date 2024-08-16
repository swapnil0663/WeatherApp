// api -> http://api.weatherapi.com/v1/current.json?key=1b5cdb8b2d344308815151730240708&q=Sangli,India&aqi=no




let form = document.querySelector('form');
let input = document.querySelector('#inputText');
let temp = document.querySelector('#temp');
let loca = document.querySelector('#Location');
let time = document.querySelector('#time');
let condition = document.querySelector('#CurrentCond')
let WeatherImage = document.querySelector('img');

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = '05/23/2014';
var day = getDayName(dateStr, "nl-NL");

form.addEventListener('submit',function(e){
        e.preventDefault();
    let inputValue = input.value;
    getWeather(inputValue);

})

async function getWeather(place) {  
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1b5cdb8b2d344308815151730240708&q=${place}&aqi=no`)
        const data = await response.json();
        console.log(data);
        let currentTemp = data.current.temp_c;
        let CurrentIcon = data.current.condition.icon;
        let CurrentText = data.current.condition.text;
        let CurrentPlace = data.location.name;
        let CurrentTime = data.location.localtime;
        updateDOM(currentTemp,CurrentIcon,CurrentText,CurrentPlace,CurrentTime)
    } catch (error) {
        alert('Please Enter Valid Location');
    }
}


function updateDOM(currentTemp,CurrentIcon,CurrentText,CurrentPlace,CurrentTime) {
    temp.innerText = currentTemp;
    loca.innerText = CurrentPlace;
    time.innerText = CurrentTime;
    condition.innerText = CurrentText;
    WeatherImage.src = CurrentIcon; 
}


getWeather('delhi');

