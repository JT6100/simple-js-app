let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';    

    let modalContainer = document.querySelector('#modal-container');
    
    function add(pokemon) {
        
      if (
      
        typeof pokemon === "object" &&
      
        "name" in pokemon
    ) {

      pokemonList.push(pokemon);

    } else {
      
      console.log("pokemon is not correct");
      
    }  

  }
  
  function getAll() {
    
    return pokemonList;
    
  }

       function addListItem (pokemon) {

          let pokemonList = document.querySelector('.pokemon-list');

          let listpokemon = document.createElement('li');
        
          let button = document.createElement('button');
        
          button.innerText = pokemon.name;
        
          button.classList.add('button-class');
        
          listpokemon.appendChild(button);
        
          pokemonList.appendChild(listpokemon);

          button.addEventListener("click", function(event) {

            showDetails(pokemon);

        });
  
       }

       function loadList() {

         return fetch(apiUrl).then(function (response) {

           return response.json();

         }).then(function (json) {

            json.results.forEach(function (item) {

               let pokemon = {

                 name: item.name,

                 detailsUrl: item.url,

               };

           add(pokemon);

           console.log(pokemon);

         });
         
       }).catch(function (e) {

          console.error(e);
          
        });

      }

      function loadDetails(item) {

        let url = item.detailsUrl;

        return fetch(url).then(function (response) {

          return response.json();

        }).then(function (details) {

          item.imageUrl = details.sprites.front_default;

          item.height = details.height;

          item.weight = details.weight;

          item.types = details.types; // maybe type must check 
          
        }).catch(function (e) {

          console.error(e);
          
        });
      
}

function showDetails(pokemon) {

  pokemonRepository.loadDetails(pokemon).then(function () {

    showModal(pokemon);

  });

}

function showModal(item) {

  let modalBody = $(".modal-body");

  let modalTitle = $(".modal-title");

  let modalHeader= $(".modalheader");
      
  modalTitle.empty();

  modalBody.empty();
  
  let nameElement = $("<h1>" + item.name + "</h1>");

  let imageElementFront = $('<img class="modal-img" style="width:50%">');

  imageElementFront.attr("src", item.imageUrl)

  let pokemonHight = $("<p>" + "height : " + item.height + "</p>")

  let pokemonWeight = $("<p>" + "weight : " + item.weight + "</p>")

  let pokemontype = $("<p>" + "type/types : " + item.types + "</p>")


    
    modalTitle.append(nameElement);

    modalBody.append(imageElement);
  
    modalBody.append(pokemonHight);

    modalBody.append(pokemonWeight);

    modalBody.append(pokemontype)
  
}

function hideModal() {

  modalContainer.classList.remove('is-visible'); 

}

window.addEventListener('keydown', (e) => {

 if (e.key === "Escape" &&    
     
   modalContainer.classList.contains('is-visible')) {  
   
    hideModal();   
   
   } 
});
 modalContainer.addEventListener('click', (e) => {
   
let target = e.target;
   
  if (target === modalContainer) {
    
    hideModal();
    
  }
   
});

return {
    
          add: add,
    
          getAll: getAll,

          addListItem: addListItem,

          loadList: loadList,

          loadDetails: loadDetails,

          showDetails: showDetails,

          showModal: showModal,
  };

})();

pokemonRepository.loadList().then(function () {

  pokemonRepository.getAll().forEach(function (pokemon) {

    pokemonRepository.addListItem(pokemon);

  });

});

