// Cargando el archivo JSON
fetch("./pokemones.json")
  .then((response) => response.json())
  .then((data) => {
    const listaPokemon = document.getElementById("listaPokemon");
    const pokemonImage = document.getElementById("imagen");
    const floatingBox = document.querySelector('.floatingBox');

    // Recorriendo los datos del JSON y agregando opciones a la lista desplegable
    data.forEach((pokemon) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = pokemon.name;
      listaPokemon.appendChild(optionElement);
    });

    // Función para mostrar los detalles del Pokémon
    const showPokemonDetails = (selectedPokemon) => {
      pokemonImage.src = selectedPokemon.ThumbnailImage;
      document.getElementById("nombre").textContent = selectedPokemon.name;
      
      // Llena los campos del cuadro descriptivo con la información del Pokémon seleccionado
      document.getElementById('numero').textContent = selectedPokemon.number;
      document.getElementById('habilidades').textContent = selectedPokemon.abilities.join(', ');
      document.getElementById('peso').textContent = selectedPokemon.weight + ' kg';
      document.getElementById('altura').textContent = selectedPokemon.height + ' cm';
      document.getElementById('debilidades').textContent = selectedPokemon.weakness.join(', ');

      // Establecer el contenido del tipo solo si hay tipos disponibles
      const tipoElement = document.getElementById("tipo");
      tipoElement.textContent = selectedPokemon.type.length > 0 ? "" + selectedPokemon.type.join(", ") : "";
    };
  

    // Mostrar los detalles del primer Pokémon por defecto
    showPokemonDetails(data[0]);

    // Al hacer clic en la imagen -> arbrir descrpcion del pokemon
    pokemonImage.addEventListener('click', () => {
      if (floatingBox.style.display === 'none') {
          floatingBox.style.display = 'block';
      } else {
          floatingBox.style.display = 'none';
      }
    });

    // Función para manejar el cambio en la selección de la lista
    listaPokemon.addEventListener("change", function () {
      const selectedPokemon = data[listaPokemon.selectedIndex];
      showPokemonDetails(selectedPokemon);
    });

  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });
