let input = document.querySelector("#input");
input.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    let value = e.target.value;
    console.log(value);
    SearchMovies(value);
  }
});

async function SearchMovies(movies) {
  let api_key = "c934843b";
  let data = await window.fetch(
    `http://www.omdbapi.com/?s=${movies}&apikey=${api_key}`
  );

  const finaldata = await data.json();
  let result = finaldata.Search;
  console.log(result);
  let output = [];
  for (let movie of result) {
    output += `
    <div class="flex-item">
    <figure>
    <img src=${movie.Poster} alt=${movie.Title}/>
    </figure>
    <h1>${movie.Title}</h1>
    <p>Year:${movie.Year}</p>
    </div>
    `;
  }
  document.getElementById("template").innerHTML = output;
}
