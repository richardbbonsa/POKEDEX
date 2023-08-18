// Cuadro de descripcion 'click' en la imagen pokemon
const floatingBox = document.getElementById('floatingBox');
pokemonImage.addEventListener('click', () => {
    
    if (floatingBox.style.display === 'none') {
        floatingBox.style.display = 'block';
    } else {
        floatingBox.style.display = 'none';
    }
});