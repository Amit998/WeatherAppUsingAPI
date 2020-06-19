const key='asxDQ6NOjTw6JgR7UbpXdig4W7cCKp5t';

//get city information

const getWeather = async(id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const response = await fetch(base+ query);
    const data = await response.json();
    // console.log(data);

    return data;

}

const getCity = async (city) => {

    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = response.json();
   
    return data;
};
0
getCity('katwa').then(data =>{
    return getWeather(data.key);
    }).then(data=>{
    console.log(data);
    }).catch(err => console.log(err));
// getWeather("191523");