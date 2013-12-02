var $ = require('jquery');

function OpenWeatherMapService() {
    this.url = 'http://api.openweathermap.org/data/2.5/';
}


OpenWeatherMapService.prototype.forecast = function (q, success) {
    var options = {
        url: this.url + 'forecast',
        data: {
            q: q,
            units: 'metric'
        },
        dataType: 'jsonp',
        success: success
    };
    $.ajax(options);
    return this;
};

OpenWeatherMapService.prototype.weather = function (q, success) {
    var options = {
        url: this.url + 'weather',
        data: {
            q: q,
            units: 'metric'
        },
        dataType: 'jsonp',
        success: success
    };
    $.ajax(options);
    return this;
};

OpenWeatherMapService.prototype.history = function (location, success) {
    var options = {
        url: this.url,
        data: {
            id: location,
            cnt: 80,
            start: 1380582000

        },
        dataType: 'jsonp',
        success: success
    };
    $.ajax(options);
    return this;
};


module.exports = OpenWeatherMapService;
