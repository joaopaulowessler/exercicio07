const axios = require('axios');

axios.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/4898/days/15?token=760ac5f35b127ee2029c6850723ce5cf')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {    
});