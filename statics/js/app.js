// Main app js
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
    items : [
      {
        id: 1,
        medic: "Jesus Alvarado Garzon",
        patient : "Normal Guy",
        diagnosis: "Diagnostico de prueba",
        print_url: "print_url"

      },
      {
        id: 2,
        medic: "Cesar Mejia",
        patient : "Normal Guy",
        diagnosis: "Retinopatia Diabetica ",
        print_url: "print_url"

      },
      {
        id: 3,
        medic: "Bernardo Mesa",
        patient : "Normal Guy",
        diagnosis: "Ojo irritado",
        print_url: "print_url"

      }
    ]
  }
});
