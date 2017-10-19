// Main app js

// Main reference to Prescrypto API
// ********************************
// Replace for https://prescrypto.com/api/v1/rx-endpoint/ on production
const RX_ENDPOINT = 'https://prescrypto-development.herokuapp.com/api/v1/rx-endpoint/';
// Replace with yours medic token
const MEDIC_TOKEN = '4b697691a633a95ae907c4958ccd9e9748a72a56'; // replace with yours medic token
const PRINT_URL = 'https://prescrypto-development.herokuapp.com/new/api_token?token=' + MEDIC_TOKEN + '&redirect_url=/print/';
const headers_ = {'Authorization': 'Token ' + MEDIC_TOKEN };
// Globally variables
var rxs = []; // Lista de Prescripciones
var rx_item = {}; // Item individual de prescripcion


// App de medicamentos
Vue.component('medication', {
  template: `
    <article class="form-group">
      <label for="extras" class="col-sm-3 control-label">Medicamento Libre</label>
      <div class="col-sm-9">
        <input type="text" class="form-control med-libre" placeholder="Nombre del Medicamento">
      </div>
      <div class="col-sm-9">
        <input type="text" class="form-control med-libre indicaciones" placeholder="Indicaciones">
      </div>
    </article>
  `
})

// App del formulario ligado al elemento #app-create-rx
var rxform = new Vue({
  el : '#app-create-rx',
  data: {
    payload:{
      patient: {
        name : "wozowsky",
        email : "wozowsky1234",
        date_of_birth : "1988-09-09",
        external_patient_file : "hidden_id_by_host_hospital"
      },
      diagnosis : 'Diagnostico',
      extras : 'Extras',
      medications : [],
      clinic : null // if not exist clinics just put null
    },
    send_message: "",
  },
  methods: {
    sign_and_send : function(event){
      if (event) event.preventDefault()
      axios({
        method : 'post',
        url : RX_ENDPOINT,
        data : this.$data.payload,
        headers : headers_
      })
      .then(function (response) {
        console.log("Success POST RX")
        console.log(response.data)
        rxform.send_message = response.data
      })
      .catch(function (error) {
        console.log("Error POST RX")
        console.log(error)
      })
    }
  }
});

var app_rx_detail = new Vue({
  el: '#rx_modal_detail',
  data : {
    rx : rx_item,
    print_url : PRINT_URL,
    data_loaded : false
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
    method : 'get',
    url : RX_ENDPOINT,
    headers : headers_
  })
  .then(function (response) {
    console.log(response);
    rxs = response.data.results;
    app.items = rxs;
  })
  .catch(function (error) {
    console.log(error);
  });
