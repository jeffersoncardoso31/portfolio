// animação menu responsivo -------------

const btnMobile = document.querySelector('.menu-hamburguer');
btnMobile.addEventListener('click',()=>{
    btnMobile.classList.toggle('active');
})
// ------------------------------------

let checkbox = document.querySelectorAll('.checkbox')
// animação body claro e escuro - DESKTOP
let corFont = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
const chk = document.querySelector('#chk');
chk.addEventListener('click',()=>{
    document.body.classList.toggle('clarear');
    if(corFont == '#E7CEA6'){
        corFont = 'black'
        checkbox[1].checked = true;
        document.body.style.setProperty('--font-color', corFont);
    }else{
        corFont = '#E7CEA6'
        document.body.style.setProperty('--font-color', corFont);
        checkbox[1].checked = false;
    }
})
// -------------------------------------------------------------
// animação body claro e escuro - Mobile------------
const chkMobile = document.querySelector('#chk-mobile');
chkMobile.addEventListener('click',()=>{

    document.body.classList.toggle('clarear');
    if(corFont == '#E7CEA6'){
        corFont = 'black'
        checkbox[0].checked = true;
        document.body.style.setProperty('--font-color', corFont);
    }else{
        corFont = '#E7CEA6'
        document.body.style.setProperty('--font-color', corFont);
        checkbox[0].checked = false;
    }
})
// -------------------------------------------------------------
let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    alert('Recebi seu email e assim que possível entrarei em contato. Obrigado!!!')
})