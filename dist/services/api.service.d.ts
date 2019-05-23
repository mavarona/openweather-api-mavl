import { Coord } from '../interfaces/api.interface';
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    constructor(APIKEY: string, lang?: string, units?: string);
    /**
     * Configure the language
     * @param lang code of the language
     */
    private configLanguage;
    /**
     * Get the units through the configuration
     * @param units The unit is metric or not
     */
    private configUnits;
    /**
     * Get the weather searched by name of the location
     * @param name The name of the location
     * @param codeCountry the code of the country: by example 'es' is spain
     */
    findByName(name: string, codeCountry?: string): Promise<any>;
    /**
     * Get the weather searched by the geolocation
     * @param geo The geolocation.
     */
    findByGeolocation(geo: Coord): Promise<any>;
    /**
     * Get the weather searched by zip code and code country
     * @param cp zip code
     * @param codeCountry code of the country
     */
    findByZipCode(cp: string, codeCountry?: string): Promise<any>;
}
