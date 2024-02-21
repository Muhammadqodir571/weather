import getArgs from './helpers/cli.js'
import {printError,printSuccess,printHelp, printWeather}  from './services/log.argv.js'
import { getIcons, getWeather } from './services/servers.js'
import {TOKEN_DICTIONARY, getKeyVal, saveKeyVal} from './services/storge.argv.js'

//token save
const saveToken = async(token) =>{
    if(!token.length){
        printError('TOKEN dosn\'t exsiet')
        return 
    }
   
    try {
        await saveKeyVal(TOKEN_DICTIONARY.token, token)
        printSuccess('token was saved')
    } catch (error) {
        printError(error.message)
        
    }

}
//city  save
const saveCity = async(city) =>{
    console.log(city);
    if(!city.length){
        printError('City dosn\'t exsiet')
        return 
    }
   
    try {
        await saveKeyVal(TOKEN_DICTIONARY.city, city)
        printSuccess('city was saved')
    } catch (error) {
        printError(error.message)
        
    }

}
const  getForcasts = async () =>{
    try {
        const city =process.env.CITY ?? (await getKeyVal(TOKEN_DICTIONARY.city) )
        const response = await getWeather(city)
        printWeather(response, getIcons(response.weather[0].icon))
    } catch (error) {
        if(error?.response?.status == 404){
            printError('CITY NOT FOUND')

        }else if(error?.response?.status == 401){
            printError('Invalit token ')
        }else{
            printError(error.message)
        }
    }
}
const weatherCli = ()=>{
 const args = getArgs(process.argv)
 
 if(args.h){
    //help
    return printHelp()
    
 }
 if(args.s){
    
    //save  ctiy
    return saveCity(args.s)
}
 if(args.t){
    //token
   return saveToken(args.t)
 }
    return getForcasts()

}
weatherCli()