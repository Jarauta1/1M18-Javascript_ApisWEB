let urlTipo
let urlPokemon
let mensaje = ""
let i
let pokemon1
let pokemon2
let pokemon3

fetch("https://pokeapi.co/api/v2").then(function (respuesta) {
    return respuesta.json();
}).then(function (datos) {
    urlTipo = datos.type
    fetch(urlTipo).then(function (respuesta) {
        return respuesta.json();
    }).then(function (datos) {
        for (i = 0; i < datos.results.length; i++) {
            mensaje += `
            <option value="${datos.results[i].url}">${datos.results[i].name}</option> 
            `
        }
        document.getElementById("div1").innerHTML = `
        <select id = "tipoPokemon" name = "select" onchange="seleccion()">
        ${mensaje}
        </select>
    `
    })
})

function seleccion() {
    urlPokemon = document.getElementById("tipoPokemon").value
    fetch(urlPokemon).then(function (respuesta) {
        return respuesta.json();
    }).then(function (datos) {
        pokemon1 = datos.pokemon[parseInt(Math.random() * (datos.pokemon.length - 0) + 0)].pokemon.name
        pokemon2 = datos.pokemon[parseInt(Math.random() * (datos.pokemon.length - 0) + 0)].pokemon.name
        pokemon3 = datos.pokemon[parseInt(Math.random() * (datos.pokemon.length - 0) + 0)].pokemon.name
        document.getElementById("div2").innerHTML = `
        <p>${pokemon1}</p>
        <p>${pokemon2}</p>
        <p>${pokemon3}</p>
        `
    })
}
