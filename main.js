const cityForm= document.querySelector('form');

const card= document.querySelector('.card');
const details= document.querySelector('.details');



const updateUI=(city)=>{
    const cityDets=data.cityDets;
    const weather=data.weather;

    //update details tamplete

    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.value}</span>
    <span>&deg;C</span>
    </div>
    `;
    if (card.classList.contains('d-none')) {
        card.classList.remove('d')
    }


    //remove 
const updateCity = async (city)=>{
//  console.log(city);

    const cityDets= await getCity(city);
    const weather= await getWeather(cityDets.Key);

    return{
        cityDets,
        weather
    };
};

cityForm.addEventListener('submit',e=>{
    //prevent default action
    e.preventDefault();


    const city= cityForm.city.value.trim();
    cityForm.reset();
    //update the ui with new city
    updateCity.apply(city)
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
})
