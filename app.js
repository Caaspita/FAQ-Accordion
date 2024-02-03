const btns = document.querySelectorAll('.btn');
const page1 = document.getElementById('n1');
const page2 = document.getElementById('n2');
const page3 = document.getElementById('n3');
const page4 = document.getElementById('n4');

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
        break;
        case 2:
            page2.classList.toggle('ocultar');
        break;
        case 3:
            page3.classList.toggle('ocultar');
        break;
        case 4:
            page4.classList.toggle('ocultar');
        break;
        default:
            break;
    }
}