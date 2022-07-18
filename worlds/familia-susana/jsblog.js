import {fakeLink, getSavedWorlds} from '../../dataWorld.js';

let worlds = getSavedWorlds();
const links = document.querySelectorAll(".url");
console.log(worlds);
links.forEach( el=> el.addEventListener("click", event=>fakeLink(el, worlds, event), {once: true}));





// function OpenModal() {
//     let element = document.getElementById('overlay');
//     element.style.display = 'block';
// }
// function CloseModal() {
//     let element = document.getElementById('overlay');
//     element.style.display = 'none';
// }



