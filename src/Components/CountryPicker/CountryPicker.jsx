import React, { useState, useEffect } from 'react';
import style from './CountryPicker.module.css';
import { Select, MenuItem , FormControl } from '@material-ui/core';
import { getCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
   const [fetchedCountries, setFetchedCountries] = useState([])
   const [country, setCountry] = useState('Global')

   useEffect(() => {
      const fetchCountries = async () => {

         setFetchedCountries(await getCountries())
      }

      fetchCountries();
   }, [setFetchedCountries])


   
    return (
         <FormControl className={style.formControl}>
            <Select 
               variant="outlined" 
               value={country} 
               onChange={(e) => {
                  setCountry(e.target.value);
                  if(e.target.value === 'Global') {
                     e.target.value = ''
                  }
                  handleCountryChange(e.target.value);
               }}
            >
            <MenuItem value='Global'>Global</MenuItem>
               {fetchedCountries.map((country) =>         (<MenuItem value={country}>{country}</MenuItem>))}
            </Select>
         </FormControl>
    )
}


export default CountryPicker;