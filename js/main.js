'use strict';

const form = document.querySelector('.js-new-form');

// form.classList.remove("collapsed");

const kittenList = document.querySelector (".js_list");
let kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
let kittenName1 = 'Anastacio';
let kittenDesc1 = 'Ruiseño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
let kittenRace1 = 'British Shorthair';
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">
    ${kittenDesc1}
  </p>
</article>
</li>`;

let kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
let kittenName2 = 'Fiona';
let kittenDesc2 = 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
let kittenRace2 = 'British Shorthair';

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage2}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">
    ${kittenDesc2}
  </p>
</article>
</li>`;

let kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
let kittenName3 = 'Cielo';
let kittenDesc3 = 'Ruiseño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
let kittenRace3 = 'British Shorthair';

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage3}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">
    ${kittenDesc3}
  </p>
</article>
</li>`;


// kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
  kittenList.innerHTML = kittenOne ;
  }

if( kittenDesc2.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenTwo;
  }

if( kittenDesc3.includes(descrSearchText) ) {
    kittenList.innerHTML += kittenThree;
  }