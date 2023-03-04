const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
    event.preventDefault();

    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerHTML = `Plz write the name before search`;
        datahide.classList.add("data_hide");
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matric&appid=7cc94d470e60e1fd5feb1410545195e7`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'> </i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'> </i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'> </i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'> </i>";

            }
            datahide.classList.remove("data_hide");

        } catch {
            city_name.innerHTML = "plz enter the city name properly";
            datahide.classList.add("data_hide");
        }

    }
}



submitBtn.addEventListener("click", getInfo);