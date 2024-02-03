const btns = document.querySelectorAll('.btn');
const page1 = document.getElementById('n1');
const page2 = document.getElementById('n2');
const page3 = document.getElementById('n3');
const page4 = document.getElementById('n4');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');


btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        numbtn = parseInt(btn.value)
        console.log(numbtn)
        abrir(numbtn);
})
});

function abrir(numbtn){
    switch (numbtn) {
        case 1:
            page1.classList.toggle('ocultar');
            p1.classList.toggle('ocultar');
            m1.classList.toggle('ocultar');
        break;
        case 2:
            page2.classList.toggle('ocultar');
            p2.classList.toggle('ocultar');
            m2.classList.toggle('ocultar');
        break;
        case 3:
            page3.classList.toggle('ocultar');
            p3.classList.toggle('ocultar');
            m3.classList.toggle('ocultar');
        break;
        case 4:
            page4.classList.toggle('ocultar');
            p4.classList.toggle('ocultar');
            m4.classList.toggle('ocultar');
        break;
        default:
            break;
    }
}