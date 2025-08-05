// // http://api.weatherapi.com/v1/current.json?key=6b12aa1b3ad343f686e52900250608&q=bihar&aqi=no

const temperaturefield = document.querySelector(".temp");
const locationfield = document.querySelector(".time_location p");
const datefield = document.querySelector(".time_location span");
const weatherfield = document.querySelector(".condition p");
const searchfield = document.querySelector(".search_area");
// const searchbutton = document.querySelector(".search_button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
   let target = searchfield.value;
    fetchresults(target);
})

const fetchresults = async (targetlocation)=>{

    let url=`http://api.weatherapi.com/v1/current.json?key=6b12aa1b3ad343f686e52900250608&q=${targetlocation}&aqi=no`;
    const res= await axios.get(url);
    let location = res.data.location.name;
    let time = res.data.location.localtime;
    let temp = res.data.current.temp_c;
    let condition = res.data.current.condition.text;
    let icon = res.data.current.condition.icon;
    let date = time.split(" ")[0];
    let timeString = time.split(" ")[1];
    temperaturefield.innerHTML = `${temp}°C`;
    locationfield.innerHTML = location;
    datefield.innerHTML = `${timeString} - ${date}`;
    weatherfield.innerHTML = condition;
    document.querySelector(".weather_icon").setAttribute("src", `https:${icon}`);



}
