'use strict';





const kittenList = document.querySelector (".js_list");
let kittenImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
let kittenName = 'Anastacio';
let kittenDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
let kittenRace = 'British Shorthair';
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
    ${kittenDesc}
  </p>
</article>
</li>`;

kittenImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
kittenName = 'Fiona';

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
    ${kittenDesc}
  </p>
</article>
</li>`;

kittenImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
kittenName = 'Cielo';

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
    ${kittenDesc}
  </p>
</article>
</li>`;


kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const linkNewFormElememt = document.querySelector(".js-button");
const newFormElement = document.querySelector('.js-new-form');




linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm () { 
  newFormElement.classList.toggle('collapsed')
}




function renderKitten(url, desc, name, race) {
  const addkitten   = ` <li><img
  class="card_img"
  src= ${url}
  alt="gatito"
/>
<h3 class="card_title">${name.toUpperCase()}</h3>
<h4 class="card_race">${race}</h4>
<p class="card_description">
  ${desc}
</p>
</article>
</li>`;
  return addkitten;
}


const result= renderKitten ( "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg","siames", kittenDesc,kittenName) 


kittenList.innerHTML = result

