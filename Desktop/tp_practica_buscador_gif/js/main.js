const apiKey = "GOUWlxW37P1GyAKGk11LNW1DECSBkfRK";

const entrada_texto = document.querySelector(".entrada_texto");
console.log(entrada_texto);

const buscador = document.querySelector(".buscador");

const resultados= document.querySelector(".resultados");

buscador.addEventListener("click", () =>{
    resultados.innerHTML= ""
    entrada_texto.innerHTML= ""
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${entrada_texto.value}&limit=9`;
    const peticion = fetch (url);

      peticion
        .then((response) => {
            return response.json() 
        .then ((response) => {
            response.data.forEach(element => {
            const urlImg = element.images.original.url; 
            const img = document.createElement("img"); 
            img.src = urlImg; 
            resultados.appendChild(img) 
          });
      })
        })
})