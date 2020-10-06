let mensaje = ""
let planeta
let personajes = ""
let url
let url2 = ""

fetch("http://swapi.dev/api/planets/").then(function (respuesta) {
    return respuesta.json();
}).then(function (datos) {
    for (let i = 0; i < datos.results.length; i++) {
        /* mensaje += `
        <option value="${datos.results[i].name}">${datos.results[i].name}</option>
        ` */ /* Parte 2 del ejercicio */
        mensaje += `
        <option value="${i}">${datos.results[i].name}</option> 
        ` /* Parte 3 del ejercicio */
    }
    document.getElementById("div1").innerHTML = `
    <select id = "planeta" name = "select" onchange="buscar()">
    ${mensaje}
    </select>
`
})

function buscar() {
    personajes = ""
    document.getElementById("div2").innerHTML = personajes
    planeta = document.getElementById("planeta").value
    /* window.alert(document.getElementById("planeta").value) */ /* Parte 2 del ejercicio */
    fetch("http://swapi.dev/api/planets/").then(function (respuesta) {
        return respuesta.json();
    }).then(function (datos) {
        for (let j = 0; j < datos.results[planeta].residents.length; j++) {
            url = datos.results[planeta].residents[j]
            fetch(url).then(function (respuesta) {
                return respuesta.json();
            }).then(function (datos) {
                personajes += `<p>${datos.name}</p>`
                document.getElementById("div2").innerHTML = personajes
                url2 = url
            })
        }
    })
}