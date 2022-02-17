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

for (let i=0; i < pokemonlist.length; i++)

    {
        if (pokemonlist[i].height <5 && pokemonlist[i].height > 4.2){

        console.log(pokemonlist[i].name + " (hight: " + pokemonlist[i].height +")" + " WOW, THAT'S BIG!");

    }

    else

        {
            console.log(pokemonlist[i].name + " (hight: " + pokemonlist[i].height +")")
        }
}