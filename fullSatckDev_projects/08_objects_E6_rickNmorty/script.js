var data = {
    characters:[
      {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  }
    ]
  };
  
  var charactersContainer = document.getElementById("characters-container");
  
  data.characters.forEach(
    func = function (character) {
      const div1 = document.createElement("div");
      div1.className = 'card';
      charactersContainer.appendChild(div1);
  
      div1.innerHTML = `
    <img src="${character.image}" alt="${character.name}" class="character-image">
    <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
    <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
    <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
  `;
    }
  );

 // Alternatively get the data from the rick n morty API 
fetch("https://rickandmortyapi.com/api/character").then(response => response.json()).then(data => {
  data.results.forEach(
    func = function (character) {
      const div1 = document.createElement("div");
      div1.className = 'card';
      charactersContainer.appendChild(div1);

      div1.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>`;
    }
  );
});