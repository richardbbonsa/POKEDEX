// Cargando el archivo JSON
fetch('./pokemones.json')
.then(response => response.json())
.then(pokemonData => {
  // Obteniendo todos los tipos de Pokémon únicos
  const tiposUnicos = [...new Set(pokemonData.flatMap(pokemon => pokemon.type))];

  // // Agregando opciones al select de tipos
  // const tipoSelect = document.getElementById('tipoSelect');
  // tiposUnicos.forEach(tipo => {
  //   const optionElement = document.createElement('option');
  //   optionElement.textContent = tipo;
  //   tipoSelect.appendChild(optionElement);
  // });

  // // Función para filtrar los Pokémon según el tipo seleccionado
  // tipoSelect.addEventListener('change', function() {
  //   const tipoSeleccionado = tipoSelect.value;
  //   const pokemonFiltrados = pokemonData.filter(pokemon => pokemon.type.includes(tipoSeleccionado));

  //   // Limpia la lista antes de agregar los Pokémon filtrados
  //   const pokemonListDiv = document.getElementById('pokemonList');
  //   pokemonListDiv.innerHTML = '';

  //   // Crea una lista no ordenada (ul) para mostrar los Pokémon filtrados
  //   const pokemonList = document.createElement('ul');

  //   // Agregando los Pokémon filtrados a la lista
  //   pokemonFiltrados.forEach(pokemon => {
  //     const listItem = document.createElement('li');
  //     listItem.textContent = pokemon.name;
  //     pokemonList.appendChild(listItem);
  //   });

  //   // Agrega la lista de Pokémon al div 'pokemonList'
  //   pokemonListDiv.appendChild(pokemonList);
  // });
})
.catch(error => {
  console.error('Error al cargar el archivo JSON:', error);
});