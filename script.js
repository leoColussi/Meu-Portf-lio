
function descrevendoLetra(){
aaaaaaaaaa
}

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrtexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrtexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra()

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');
                                /* AIR FUNCTION */
ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

