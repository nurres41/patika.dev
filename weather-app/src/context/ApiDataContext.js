import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import CityContext from './CityContext';

const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {

    const dataContext = useContext(CityContext);
        
  const [dailyWeather, setDailyWeather] = useState();
  
  useEffect(() => {
    let apiData;
    try {
      apiData = async () => {
        const veri = await axios
          .get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${dataContext.selectedCity},TR?key=T9YS2FZM64X2NFU4PQGEVD4GV`
          )
          .then((res) => setDailyWeather(res?.data.days));
      };
    } catch (error) {
      console.log(error);
    }
    apiData();
  }, [dataContext.selectedCity]);
    
    const values = {
        dailyWeather,
        setDailyWeather
    }

    return <ApiDataContext.Provider value={values}>{ children }</ApiDataContext.Provider>
}

export default ApiDataContext