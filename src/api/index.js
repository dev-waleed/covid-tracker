import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
   let changeableURL = url;

   if(country) {
      changeableURL = `${url}/countries/${country}`;
   }

   try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

      return { confirmed, recovered, deaths, lastUpdate, }
   } catch (error) {
      alert(error)
   }
}


export const fetchDailyData = async () => {
   try {
      const { data } = await axios.get(`${url}/daily`);

      const requiredData = data.map((dailyData) => ({
         date: dailyData.reportDate,
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,

      }))

      return requiredData;
   } catch (error) {
      alert(error)
   }
}


export const getCountries = async () => {
   try {
      const { data: { countries } } = await axios.get(`${url}/countries`)

      return countries.map((country) => country.name)
   } catch (error) {
      alert(error);
   }
}