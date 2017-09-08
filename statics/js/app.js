// Main app js
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
})
