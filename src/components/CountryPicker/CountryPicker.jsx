import react, { useState,useEffect } from 'react';
import { fetchCountries } from '../../api';
import { NativeSelect , FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {

    const [allCountries , setCountries] = useState([])

    useEffect(() => {
        try {
            const fetchApi = async () => {
                let data = await fetchCountries()
                setCountries(data)
            }
            fetchApi()
        }
        catch(error){
            return error
        }
    },[setCountries])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {allCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect> 
        </FormControl>
    );
};

export default CountryPicker;

