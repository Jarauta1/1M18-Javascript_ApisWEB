fetch("https://randomuser.me/api/").then(function (respuestas) {
    return respuestas.json();
}).then(function (datos) {
    document.getElementById("div1").innerHTML = `
    <img src="${datos.results[0].picture.medium}" alt=""/>
    <h1>${datos.results[0].name.title} ${datos.results[0].name.first} ${datos.results[0].name.last}</h1>
    <p>Email: ${datos.results[0].email}</p>
    <p>Dirección: ${datos.results[0].location.street.name}, ${datos.results[0].location.street.number}. </p>
    <p>Ciudad: ${datos.results[0].location.city}, ${datos.results[0].location.state}, ${datos.results[0].location.country}</p>
    <p>Código postal: ${datos.results[0].location.postcode}</p>
    `
})