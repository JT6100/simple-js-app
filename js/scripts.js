let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';    
    
    function add(pokemon) {

      pokemonList.push(pokemon);
    }
  
  function getAll() {
    
    return pokemonList;
    
  }

       function addListItem(pokemon){

          let pokemonList = document.querySelector('.list-group');

          let listpokemon = document.createElement('li');
        
          let button = document.createElement('button');
        
          button.innerText = pokemon.name;
        
          button.classList.add('btn-primary');
        
          listpokemon.appendChild(button);
        
          pokemonList.appendChild(listpokemon);

          button.addEventListener('click', function() {

            showDetails(pokemon);

        })
  
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
          
        }).catch(function (e) {

          console.error(e);
          
        });
      
}

function showDetails(item) {

  loadDetails(item).then(function () {

    showModal(item);

  });

}
   
  function showModal(item) {

    let modalBody = $(".modal-body");
  
    let modalTitle = $(".modal-title");

    modalTitle.empty();
  
    modalBody.empty();
    
    let nameElement = $("<h1>" + item.name + "</h1>");
  
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
  
    imageElementFront.attr("src", item.imageUrl)
  
    let pokemonHeight = $("<p>" + "height : " + item.height + "</p>");
  
    let pokemonWeight = $("<p>" + "weight : " + item.weight + "</p>");
  
      modalTitle.append(nameElement);
  
      modalBody.append(imageElementFront);
    
      modalBody.append(pokemonHeight);
  
      modalBody.append(pokemonWeight);
  }
  

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