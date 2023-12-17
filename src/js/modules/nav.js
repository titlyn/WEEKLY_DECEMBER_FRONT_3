import { NAV_LINKS, NAV_WRAPPER } from './elements.js'

export function toggleMobilNav(){
    NAV_WRAPPER.classList.toggle('visible')
}

function closeNav(){
    NAV_WRAPPER.classList.remove('visible')
}

export function setupNavLinks(){
    NAV_LINKS.forEach(link => {
        link.addEventListener('click', closeNav)
    });
}