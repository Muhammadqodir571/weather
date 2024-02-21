import chalk from "chalk";
import dedent from "dedent-js"
const printError =(error)=>{
    console.log(chalk.bgRed('error')+' '+error)
}
const printSuccess = (message)=>{
    console.log(chalk.bgGreen("SUCCESS")+' '+message);
}
const printHelp = () =>{
    console.log(dedent

        `${chalk.bgBlue('HELP')}
        -s [CITY] for install ctiy
        -h  for help
        -t [API_KEY] FOR SAVING TOKEN
        `
    );
  
}
const printWeather = (response, icon)=>{
    console.log(dedent`
    ${chalk.bgYellowBright('WEATHER')} City Weather ${response.name}
    ${icon} ${response.weather[0].description} 
    Temperature: ${response.main.temp} feels like ${response.main.feels_like}
    Humidity: ${response.main.humidity}%
    wind speed: ${response.wind.speed}
    `);
}


export {printError,printSuccess,printHelp,printWeather}