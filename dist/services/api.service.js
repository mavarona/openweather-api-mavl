"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
const axios_1 = __importDefault(require("axios"));
const lang_codes_1 = require("../constants/lang-codes");
class ApiService {
    constructor(APIKEY, lang = 'es', units = 'metric') {
        this.APIKEY = APIKEY;
        this.configLanguage(lang);
        this.configUnits(units);
    }
    /**
     * Configure the language
     * @param lang code of the language
     */
    configLanguage(lang) {
        if (lang_codes_1.LANGCODES.filter(l => l.code === lang).length === 1) {
            this.lang = `&lang=${lang}`;
        }
        else {
            this.lang = `&lang=es`;
        }
    }
    /**
     * Get the units through the configuration
     * @param units The unit is metric or not
     */
    configUnits(units) {
        this.units = '';
        if (units === 'm' || units === 'metric') {
            this.units = '&units=metric';
        }
    }
    /**
     * Get the weather searched by name of the location
     * @param name The name of the location
     * @param codeCountry the code of the country: by example 'es' is spain
     */
    findByName(name, codeCountry = '') {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (codeCountry === '') {
            filter = `q=${name}`;
        }
        else {
            filter = `q=${name},${codeCountry}`;
        }
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filter}${params}`;
        return this.requestApi(url);
    }
    /**
     * Get the weather searched by the geolocation
     * @param geo The geolocation.
     */
    findByGeolocation(geo) {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (geo === undefined || geo === null) {
            filter = `lat=43.2633534&lon=-2.951074`;
        }
        else {
            filter = `lat=${geo.lat}&lon=${geo.lon}`;
        }
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filter}${params}`;
        return this.requestApi(url);
    }
    /**
     * Get the weather searched by zip code and code country
     * @param cp zip code
     * @param codeCountry code of the country
     */
    findByZipCode(cp, codeCountry = '') {
        let params = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filter = '';
        if (codeCountry === '') {
            filter = `zip=${cp}`;
        }
        else {
            filter = `zip=${cp},${codeCountry}`;
        }
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filter}${params}`;
        return this.requestApi(url);
    }
    /**
     * the request to Api
     * @param url the url of the call to the Api
     */
    requestApi(url) {
        return axios_1.default.get(url)
            .then(res => { return res.data; })
            .catch(err => { return err; });
    }
}
exports.ApiService = ApiService;
