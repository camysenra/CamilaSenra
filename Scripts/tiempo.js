function convertirGradosKelvinACelsius(kelvin) {
    var resultado = kelvin - 273;
    return resultado.toFixed(2);
}
function obtenerElTiempo() {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=e6d5692bcd193f45bdc2634fc8e17558", function( data ) {
        $("#weather").empty();
        $("#weather")
            .append($("<p></p>").text("Descripción: " + data.weather[0].description))
            .append($("<p></p>").text("Humedad: " + data.main.humidity))
            .append($("<p></p>").text("Temperatura: " + convertirGradosKelvinACelsius(data.main.temp)));
    });
}