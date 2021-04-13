import React, { useState, useEffect } from 'react';
import style from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
   const [fetchedCountries, setFetchedCountries] = useState([])

   useEffect(() => {
      const fetchCountries = async () => {

         setFetchedCountries(await getCountries())
      }

      fetchCountries();
   }, [setFetchedCountries])


   
    return (
         <FormControl className={style.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {
                  fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
               }
            </NativeSelect>
         </FormControl>
    )
}


export default CountryPicker;