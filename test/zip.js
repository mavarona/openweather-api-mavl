const expect = require('chai').expect;
const ApiService = require('./../dist').ApiService;

const constants = require('./constants');
const APIURL = constants.APIURL;
const APIKEY = constants.APIKEY;

describe('Search of weather by zip', () => {
    beforeEach(() => {
        const nock = require('nock');
        const response = require('./mock/zip');
        const query = {
            zip: 20590,
            units: 'metric',
            lang: 'es',
            appid: APIKEY
        }
        nock(APIURL)
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, response);
    });
    it('weather by zip 20590', () => {
        const api = new ApiService(APIKEY, 'es', 'metric');
        return api.findByZipCode(20590)
            .then(res => {
                expect(typeof res.id).to.equal('number');
                expect(typeof res.main.temp).to.equal('number');
                expect(typeof res.main.pressure).to.equal('number');
                expect(typeof res.main.humidity).to.equal('number');
                expect(typeof res.main.temp_min).to.equal('number');
                expect(typeof res.main.temp_max).to.equal('number');
            });
    });
})