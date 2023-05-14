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

const toggleEng = (e) => {
    toggleLang(1)
    document.getElementById('btn_eng').classList.add("active");
    document.getElementById('btn_pt').classList.remove("active");
}

const togglePT = (e) => {
    toggleLang(0)
    document.getElementById('btn_pt').classList.add("active");
    document.getElementById('btn_eng').classList.remove("active");
}


document.getElementById('btn_pt').addEventListener("click", togglePT)
document.getElementById('btn_eng').addEventListener("click", toggleEng)