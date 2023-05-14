/**
 * 
 * @param {*} lang (int): 0 - Portuguese | 1 - English
 */
const toggleLang = (lang) => {
    if(lang == 0) {
        elements.forEach(e => document.getElementById(e.id).innerHTML = e.pt)
    } else if(lang == 1) {
        elements.forEach(e => document.getElementById(e.id).innerHTML = e.eng)
    }
}