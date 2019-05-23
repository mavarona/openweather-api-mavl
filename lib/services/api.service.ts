import { URL_LOCALHOST, CURRENT } from '../constants/constants';
import axios from 'axios';
import { LANGCODES } from '../constants/lang-codes';
import { Coord } from '../interfaces/api.interface';
export class ApiService {
    private APIKEY: string;
    private lang: string | undefined;
    private units: string | undefined;
    constructor( APIKEY: string, lang: string = 'es', units: string = 'metric'){
        this.APIKEY = APIKEY;
        this.configLanguage(lang);
        this.configUnits(units);
    }
    /**
     * Configure the language
     * @param lang code of the language
     */
    private configLanguage(lang: string){
        if(LANGCODES.filter(l => l.code === lang).length === 1){
            this.lang = `&lang=${lang}`;
        }else{
            this.lang = `&lang=es`;
        }
    }
    /**
     * Get the units through the configuration
     * @param units The unit is metric or not
     */
    private configUnits(units: string){
        this.units = '';
        if(units === 'm' || units === 'metric'){
            this.units = '&units=metric';
        }
    }
    /**
     * Get the weather searched by name of the location
     * @param name The name of the location
     * @param codeCountry the code of the country: by example 'es' is spain
     */
    findByName(name: string, codeCountry: string= ''){
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if(codeCountry === ''){
            filter = `q=${name}`;
        }else{
            filter = `q=${name},${codeCountry}`;
        }
        const url = `${URL_LOCALHOST}${CURRENT}${filter}${params}`;
        return axios.get(url)
            .then(res =>  { return res.data })
            .catch(err => { return err});
    }
    /**
     * Get the weather searched by the geolocation
     * @param geo The geolocation.
     */
    findByGeolocation(geo: Coord){
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if(geo === undefined || geo === null){
            filter = `lat=43.2633534&lon=-2.951074`;
        }else{
            filter = `lat=${geo.lat}&lon=${geo.lon}`;
        }
        const url = `${URL_LOCALHOST}${CURRENT}${filter}${params}`;
        return axios.get(url)
            .then(res =>  { return res.data })
            .catch(err => { return err});
    }
    /**
     * Get the weather searched by zip code and code country
     * @param cp zip code
     * @param codeCountry code of the country 
     */
    findByZipCode(cp: string, codeCountry: string = ''){
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if(codeCountry === ''){
            filter = `zip=${cp}`;
        }else{
            filter = `zip=${cp},${codeCountry}`;
        }
        const url = `${URL_LOCALHOST}${CURRENT}${filter}${params}`;
        return axios.get(url)
            .then(res =>  { return res.data })
            .catch(err => { return err});
    }
}