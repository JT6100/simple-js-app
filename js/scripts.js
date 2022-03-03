var pokemonRepository = (function () {

    let pokemonlist = [
        
        {

            name: 'Charmander',

            type: ['fire'],
            
            height: 2.00,
    
        },

        {

            name: 'Krookodile',

            type: ['ground', 'dark'],

            height: 4.92,

        },

        {
            name: 'Alcremie',

            type: ['fairy'],

            height: 1,
        }

    ];

    return {

        add: function(pokemon) {
            
            pokemonlist.push(pokemon);
        },

        getAll: function() {

            return pokemonlist;
        }

    };

    })();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {

  let pokemonList = document.querySelector(".pokemon-list");

  let listpokemon = document.createElement("li");

  let button = document.createElement("button");

  button.innerText = pokemon.name;

  button.classList.add("button-class");

  listpokemon.appendChild(button);

  pokemonList.appendChild(listpokemon);
  
   
});


