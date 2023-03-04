const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const getInfo = async (event) => {
    event.preventDefault();

    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerHTML = `Plz write the name before search`;
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matric&appid=7cc94d470e60e1fd5feb1410545195e7`;
            const response = await fetch(url);
            console.log(response);

        } catch {
            city_name.innerText = `Plz enter the city name properly`;
        }

    }
}



submitBtn.addEventListener("click", getInfo);