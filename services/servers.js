 import axios from 'axios'
import { TOKEN_DICTIONARY, getKeyVal } from './storge.argv.js'

const getIcons = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async(city)=>{
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const token = process.env.TOKEN ?? await getKeyVal(TOKEN_DICTIONARY.token)
    if(!token){
        throw new Error("API dosn't exsit ,-t [API_KEY] FOR SAVING TOKEN")
    }
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//     const url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=7ad71139712e51d63c8dba96372733d0')
//     url.searchParams.append('q',ctiy)   
//     url.searchParams.append('appid',token)
//     url.searchParams.append('lang','en')
//     url.searchParams.append('units','metric')
//     https.get(url, (response)=>{
//         let  res = ''
//         response.on('data', chunk =>{
//             res+=chunk
//         })
//         response.on('end', ()=>{
//             console.log(res);
//         })
//     })
// 
const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
    params:{
        q:city,
        appid:token,
        lang:'en',
        units:'metric'
    }
})

return data

}

export {getWeather, getIcons}