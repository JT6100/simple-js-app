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

          item.types = details.types;
          
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
      
  modalContainer.innerHTML = '';
  
  let modal = document.createElement('div');
  
    modal.classList.add('modal');  
  
    let closeButtonElement = document.createElement('button');  

    closeButtonElement.classList.add('modal-close');
  
    closeButtonElement.innerText = 'Close'; 
  
    closeButtonElement.addEventListener('click', hideModal);
  
    let titleElement = document.createElement('h1');
  
    titleElement.innerText = item.name;

    let imageElement = document.createElement('img');

    imageElement.setAttribute ("src", item.imageUrl);
  
    let contentElement = document.createElement('p');
  
    contentElement.innerText = item.height;
  
    modal.appendChild(closeButtonElement);
  
    modal.appendChild(titleElement);

    modal.append(imageElement);
  
    modal.appendChild(contentElement);
  
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible'); 
  
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

