const OPTIONS = {
    api: 'https://pokeapi.co/api/v2/pokemon/'
}

const components = {
    button: 'search-button',
    input: 'search-input',
    container: 'pokemon-container'
}


document
    .getElementById(components.button)
    .addEventListener('click',async () => {
        createPokemonImage(await getPokemonByName(
            document.getElementById(components.input).value
        ));
});

components.input.addEventListener('component.input', function () {
    if (components.input.value.trim() !== ""){
        components.button.disabled = false;
    } else {
        components.button.disabled = true;
    }
});



async function getPokemonByName(pokemonName){
    return (await fetch(`${OPTIONS.api}${pokemonName}`)).json()
    

    
}
// gitre
// refactor
// input nincs beírva gomb letiltva
//töröljük a konténert egy kép legyen

function createPokemonImage(data){
    document.getElementById(components.container).innerHTML = '';
    document.getElementById(components.container).append(
        Object.assign(document.createElement("img"),{
            src: data.sprites.front_default,
        })
    );
}