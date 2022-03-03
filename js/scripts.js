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

      function add(pokemon) {
        
    if (
      
      typeof pokemon === "object" &&
      
      "name" in pokemon &&
      
      "height" in pokemon &&
      
      "type" in pokemon
      
    ) {
      
      pokemonlist.push(pokemon);
      
    } else {
      
      console.log("pokemon is not correct");
      
    }
        
  }
  
  function getAll() {
    
    return pokemonlist;
    
  }

  function addListener(button, pokemon){

    button.addEventListener("click", function() {

        showDetails(pokemon);

    });
  }

       function addListItem(pokemon){

          let pokemonList = document.querySelector(".pokemon-list");

          let listpokemon = document.createElement("li");
        
          let button = document.createElement("button");
        
          button.innerText = pokemon.name;
        
          button.classList.add("button-class");
        
          listpokemon.appendChild(button);
        
          pokemonList.appendChild(listpokemon);

          addListener(button, pokemon);
         
       }

       function showDetails(pokemon){

        console.log(pokemon.name);

       }

  return {
    
          add: add,
    
          getAll: getAll,

          addListItem: addListItem,

          showDetails: showDetails,
  };

    })();

pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {

  pokemonRepository.addListItem(pokemon);

});
