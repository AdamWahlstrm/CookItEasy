

// Skapar en ny XMLHttpRequest
var xhr = new XMLHttpRequest();

// Ange metod, filnamn och asynkron (true) eller synkron (false) förfrågan
xhr.open('GET', 'header.html', true);

// Funktionen som körs när förfrågan är klar
xhr.onload = function() {
  if (xhr.status === 200) {
    // Inkluderar headern och navigationsmenyn i div-elementet med id "header"
    document.getElementById('header').innerHTML = xhr.responseText;
  }
};

// Skickar förfrågan
xhr.send();


