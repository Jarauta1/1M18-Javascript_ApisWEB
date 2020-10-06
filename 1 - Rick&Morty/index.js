let url = "https://rickandmortyapi.com/api/character/"
let mensaje = ""
fetch(url).then(function (respuesta) {
    return respuesta.json();
}).then(function (datos) {
    for (let i = 0; i < datos.results.length; i++) {
        mensaje += `
        <h1>${datos.results[i].name}</h1>
        <img src="${datos.results[i].image}" alt=""/>
         `
    }
    document.getElementById("div1").innerHTML = mensaje
})