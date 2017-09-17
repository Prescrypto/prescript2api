// Main app js

//Main reference to API
const RX_ENDPOINT = 'https://prescrypto-development.herokuapp.com/api/v1/rx-endpoint/';
const MEDIC_TOKEN = '4b697691a633a95ae907c4958ccd9e9748a72a56'; // replace with yours medic token
const PRINT_URL = 'https://prescrypto-development.herokuapp.com/new/api_token?token=' + MEDIC_TOKEN + '&redirect_url=/print/';
const headers_ = {'Authorization': 'Token ' + MEDIC_TOKEN };
// globally variables
var rxs = []; // Lista de Prescripciones
var rx_item = {}; // Item individual de prescripcion


// App del formulario ligado al elemento #app-create-rx
var rxform = new Vue({
  el: '#app-create-rx',
  data: {
    patient: {
      name : "wozowsky",
      email : "wozowsky1234",
      date_of_birth: "1988-09-09",
      external_patient_file: "hidden_id_by_host_hospital"
    },
    diagnosis: 'Diagnostico',
    extras: 'Extras',
    medications: [],
    clinic: null // if not exist clinics just put null
  },
  methods: {
    sign_and_send : function(event){
      if (event) event.preventDefault()
      console.log(this.$data)
      axios({
        method: 'post',
        url: RX_ENDPOINT,
        data: this.$data,
        headers: headers_
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
});

var app_rx_detail = new Vue({
  el: '#rx_modal_detail',
  data : {
    rx : rx_item,
    print_url: PRINT_URL,
    data_loaded: false
  }
});

var app = new Vue({
  el: '#app-prescription',
  data: {
    items : rxs,
    print_url: PRINT_URL
  },
  methods : {
    rx_detail : function(rx_item){
      app_rx_detail.rx = rx_item,
      app_rx_detail.data_loaded = true
    }
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
