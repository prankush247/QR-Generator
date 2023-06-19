var generate = document.getElementById("b1");
generate.addEventListener("click", generateQR);

var download = document.getElementById("b3");

var reset = document.getElementById("b2");
var url = document.getElementById('url');


reset.addEventListener("click", reload);

function generateQR() {
download.hidden = false 
  var displayField = document.querySelector('.box3');

  displayField.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=00FF00&bgcolor=000000&data=' + encodeURIComponent(url.value) + '">';

  download.addEventListener("click", function() {
    downloadQR('https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=00FF00&bgcolor=000000&data=' + encodeURIComponent(url.value));
  });
}

function reload() {
  location.reload();
}

function downloadQR(url){
  window.location.href = url
}