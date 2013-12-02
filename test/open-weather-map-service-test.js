var $ = require('jquery');
var assert = require('chai').assert;
var OpenWeatherMap = require('../lib/open-weather-map-service.js');


describe('Open Weather Map Service', function () {

    var weather = new OpenWeatherMap();

    it('fetches forecast', function (done) {
        weather.forecast('London, UK', function (data, a, b) {
            assert.equal(data.city.name, 'London');
            assert.equal(data.city.country, 'GB');
            done();
        });
    });



});