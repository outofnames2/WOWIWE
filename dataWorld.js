const worldGrid = document.querySelector("#world-grid");

export function getWorldData(data){
    const name = data[0];
    const imgFiletype = data[1];

    const basePath = `./worlds/${name}`;
    const imgPath = imgFiletype  ? `${basePath}/assets/world.${imgFiletype}` : "/assets/world-404.png";
    return {
        name: name,
        imgPath: imgPath,
        urlPath: `${basePath}/index.html`
    };
}


export function storeWorlds(worlds){
    localStorage.setItem("worlds", JSON.stringify(worlds));
}

export function getDefaultWorlds(){
    const defaultWorldsData = [
        ["familia", "gif"],
        ["chayanne", "webp"],
        ["conspiracy", "gif"],
        ["boquita"]
    ];
    return defaultWorldsData.map(d=>getWorldData(d));
}


export function getSavedWorlds(){
    return JSON.parse(localStorage.getItem("worlds"));
}


export function displayWorld(world){
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.setAttribute("href", world.urlPath);
    img.setAttribute("src", world.imgPath);
    
    worldGrid.append(a);
    a.append(img); 
}

export function fakeLink(link, worlds, event) {
    //imita tag <a>
    let data = JSON.parse(event.target.getAttribute("data-world"));
    link.style.color = "#551a8b";
    
    //Si tienen data sobre mundos, se guardan en localStorage
    if (data != null) {
        const world = getWorldData(data);
        //guardando mundo a array de objetos mundo si es que no se repitio
        if (worlds.filter(e=>e.name === world.name)[0] == null){
            console.log(Object.values(worlds), world.name);
            worlds.push(world);
        }
        //guardando 'worlds' en localStorage
        storeWorlds(worlds);
    }
}
export function isClicked(links, isOne, worlds){
    console.log(links);
    //evento para los links falsos
    isOne? links[0].addEventListener("click", event=>fakeLink(links[0], worlds, event), {once: true}):
        links.forEach( el=> el.addEventListener("click", event=>fakeLink(el, worlds, event), {once: true}));
}


export default {
    isClicked,
    getWorldData,
    getDefaultWorlds,
    getSavedWorlds,
    storeWorlds,
    displayWorld
};
