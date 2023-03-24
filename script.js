
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00d3f529c8msh71f9c7949383255p10c098jsne7b8f5a5a1d0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const weather=(city)=>{
	fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		document.getElementById("temp").innerHTML = response.current.temp_c+ ` °C`; 
		document.getElementById("humidity").innerHTML= response.current.humidity+`%`
		document.getElementById("pressure").innerHTML= response.current.pressure_mb+` mb`
		document.getElementById("date_time").innerHTML= response.location.localtime
		document.getElementById("condition").innerHTML= response.current.condition.text
		document.getElementById("wind_dir").innerHTML= response.current.wind_dir
		document.getElementById("title").innerHTML= city
		
		for(let i=1; i<response.forecast.forecastday.length; i++){
			document.getElementById("day"+i).innerHTML= response.forecast.forecastday[i].date
			let text= document.createElement("h6")
			text.innerHTML= response.forecast.forecastday[i].day.condition.text
			document.getElementById("condition_day"+i).appendChild(text)
			document.getElementById("sunrise"+i).innerHTML= response.forecast.forecastday[i].astro.sunrise
			document.getElementById("sunset"+i).innerHTML= response.forecast.forecastday[i].astro.sunset
			document.getElementById("min_temp"+i).innerHTML= response.forecast.forecastday[i].day.mintemp_c+` °C`
			document.getElementById("max_temp"+i).innerHTML= response.forecast.forecastday[i].day.maxtemp_c+` °C`
		}
		
		
	})
	.catch(err => console.error(err));
}
const weather2=(city)=>{

	fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=ahmedabad&days=3', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
document.getElementById("temp_ahmedabad").innerHTML = response.current.temp_c+ ` °C`; 
document.getElementById("humidity_ahmedabad").innerHTML= response.current.humidity+`%`
document.getElementById("pressure_ahmedabad").innerHTML= response.current.pressure_mb+` mb`
})
.catch(err => console.error(err));
}

const weather3=(city)=>{

	fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=kolkata&days=3', options)
		.then(response => response.json())
		.then((response) => {
document.getElementById("temp_kolkata").innerHTML = response.current.temp_c+ ` °C`; 
document.getElementById("humidity_kolkata").innerHTML= response.current.humidity+`%`
document.getElementById("pressure_kolkata").innerHTML= response.current.pressure_mb+` mb`
})
.catch(err => console.error(err));
}

const weather4=(city)=>{

	fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=jaipur&days=3', options)
		.then(response => response.json())
		.then((response) => {
document.getElementById("temp_jaipur").innerHTML = response.current.temp_c+ ` °C`; 
document.getElementById("humidity_jaipur").innerHTML= response.current.humidity+`%`
document.getElementById("pressure_jaipur").innerHTML= response.current.pressure_mb+` mb`
})
.catch(err => console.error(err));
}

search.addEventListener("click", (e)=>{
	e.preventDefault()
	weather(city.value)
})
weather("mumbai")
weather2()
weather3()
weather4()