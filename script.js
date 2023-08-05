const apiKey="a64f8de503d63b15597c0661f310ea1e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWheather(city){
    const response=await fetch(apiUrl + city+`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if (data.wheather[0].main=="Clouds"){
        weatherIcon.src="images/cloud.png";
    }

    if (data.wheather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }

    if (data.wheather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }

    if (data.wheather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }

    else if (data.wheather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }

    
}
searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})

checkWheather();