// animação menu responsivo -------------

const btnMobile = document.querySelector('.menu-hamburguer');
btnMobile.addEventListener('click', () => {
    btnMobile.classList.toggle('active');
})
// ------------------------------------

let checkbox = document.querySelectorAll('.checkbox')
// animação body claro e escuro - DESKTOP
let corFont = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
const chk = document.querySelector('#chk');
chk.addEventListener('click', () => {
    document.body.classList.toggle('clarear');
    if (corFont == '#E7CEA6') {
        corFont = 'black'
        checkbox[1].checked = true;
        document.body.style.setProperty('--font-color', corFont);
    } else {
        corFont = '#E7CEA6'
        document.body.style.setProperty('--font-color', corFont);
        checkbox[1].checked = false;
    }
})
// -------------------------------------------------------------
// animação body claro e escuro - Mobile------------
const chkMobile = document.querySelector('#chk-mobile');
chkMobile.addEventListener('click', () => {

    document.body.classList.toggle('clarear');
    if (corFont == '#E7CEA6') {
        corFont = 'black'
        checkbox[0].checked = true;
        document.body.style.setProperty('--font-color', corFont);
    } else {
        corFont = '#E7CEA6'
        document.body.style.setProperty('--font-color', corFont);
        checkbox[0].checked = false;
    }
})
// -------------------------------------------------------------
// Escolher as Habilidades-------
const skills = document.querySelectorAll('.skill');
let htmlConhecimento = document.querySelector('.htmlConhecimento');
skills.forEach(skill => {
    skill.addEventListener('click', () => { selecionarSkill(skill) });
});

function selecionarSkill(skill) {
    let verificar = skill.classList.value;
    let resultado = verificar.replace('skill ', "");
    switch (resultado) {
        case "html5":
            htmlConhecimento.style.marginLeft = '0'
            break;
        case "css3":
            htmlConhecimento.style.marginLeft = '-10rem'
            break;
        case "javascript":
            htmlConhecimento.style.marginLeft = '-20rem'
            break;
        case "react":
            htmlConhecimento.style.marginLeft = '-30rem'
            break;
        case "node":
            htmlConhecimento.style.marginLeft = '-40rem'
            break;
        case "git":
            htmlConhecimento.style.marginLeft = '-50rem'
            break;

        default:
            break;
    }

}
// -----------------------------
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    alert('Recebi seu email e assim que possível entrarei em contato. Obrigado!!!')
})

