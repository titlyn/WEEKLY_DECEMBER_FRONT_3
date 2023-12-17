import { NAV_TOGGLER } from "./modules/elements.js";
import { toggleMobilNav } from "./modules/nav.js";

function takeOffLoader(){
    const loader = document.getElementById('loader')
    loader.classList.add('loaded')
}

window.addEventListener('load', takeOffLoader)
NAV_TOGGLER.addEventListener('click', toggleMobilNav)