import {getSavedWorlds, storeWorlds, displayWorld, getDefaultWorlds} from './dataWorld.js';


//asegurarse de que haya algo en localStorage y en caso de haberlo
let worlds = getSavedWorlds()?? getDefaultWorlds();
storeWorlds(worlds);

//display world
worlds.map(e=>displayWorld(e)); 
