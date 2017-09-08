// Main app js

//Main reference to API
const RX_ENDPOINT = 'https://prescrypto-development.herokuapp.com/api/v1/rx-endpoint/';
const MEDIC_TOKEN = '4b697691a633a95ae907c4958ccd9e9748a72a56';
const PRINT_URL = 'https://prescrypto-development.herokuapp.com/new/api_token?token=' + MEDIC_TOKEN + '&redirect_url=/print/';
const headers_ = {'Authorization': 'Token ' + MEDIC_TOKEN }
var rxs = [];

var rxform = new Vue({
  el: '#app-create-rx',
  data: {
    patient_email: 'Email/telefono/ID del Paciente',
    patient_name: 'Nombre del paciente',
    patient_dob: '01-09-1988',
    diagnosis: 'Diagnostico',
    extras: 'Extras'
  }
});

var app = new Vue({
  el: '#app-prescription',
  data: {
    items : rxs,
    print_url: PRINT_URL
  }
});

axios({
    method: 'get',
    url: RX_ENDPOINT,
    headers: headers_
  })
  .then(function (response) {
    console.log(response);
    rxs = response.data.results;
    app.items = rxs;
  })
  .catch(function (error) {
    console.log(error);
  });


