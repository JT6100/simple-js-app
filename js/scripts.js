let pokemonRepository = (function () {

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

pokemonlist.forEach(function(pokemon) {
  
    console.log(pokemon.name +': ' + ' height: ' + pokemon.height);

    if (pokemon.height <5 && pokemon.height > 4.2){
      
      document.write(pokemon.name + " (height: " + pokemon.height +")" + " WOW, THAT'S BIG!" + '<br /><br />');
      
} else

             document.write(pokemon.name + " (height: " + pokemon.height + ")"+ '<br /><br />');  

                    
});

    /* {
      if (pokemonlist[i].height <5 && pokemonlist[i].height > 4.2){

        console.log(pokemonlist[i].name + " (hight: " + pokemonlist[i].height +")" + " WOW, THAT'S BIG!");

    }

    else

        {
            console.log(pokemonlist[i].name + " (hight: " + pokemonlist[i].height +")")
        }
}
*/