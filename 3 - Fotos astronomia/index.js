let dia
let mes
let anyo
let url
function fecha() {
    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value
    anyo = document.getElementById("anyo").value
    url = `https://api.nasa.gov/planetary/apod?api_key=Juujg7HMBTe15DgtEVovlF6JuxcrDLRgzRWWbm8U&date=${anyo}-${mes}-${dia}`
    fetch(url).then(function (respuesta) {
        return respuesta.json();
    }).then(function (datos) {
        document.getElementById("div1").innerHTML = `
<p>${datos.date}</p>
<h1>${datos.title}</h1>
<img src="${datos.url}"
<p>${datos.explanation}</p>
`
    })
}