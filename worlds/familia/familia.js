import {fakeLink, getSavedWorlds} from '.../dataWorld.js';

let worlds = getSavedWorlds();
const link = document.querySelector(".url");
console.log(worlds);
link.addEventListener("click", event=>fakeLink(link, worlds, event), {once: true});
