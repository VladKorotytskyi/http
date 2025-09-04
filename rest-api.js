const btn = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");

// fetch("https://pokeapi.co/api/v2/ability/1/")
//   .then((result) => {
//     return result.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon.name);
//     return 5;
//   })
//   .then((res1) => {
//     console.log(res1); //5
//   })
//   .then((res2) => {
//     console.log(res2); //undefined
//   });

btn.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then((result) => result.json())
    .then((pokemon) => {
      console.log(pokemon.name);
      span.textContent = pokemon.name;
      span.innerHTML = createPokemonCard(pokemon);
    })
    .catch(() => {
      alert("Помилка");
    });
});
function createPokemonCard(pokemon) {
  return `
      <div class="card">
  <div class="card-img-top">
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я: ${pokemon.name}</h2>
    <p class="card-text">Вага: ${pokemon.weight}</p>
    <p class="card-text">Зріст: ${pokemon.height}</p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group">
      <li class="list-group-item"></li>
    </ul>
  </div>
</div>
     `;
}
