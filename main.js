const form = document.getElementById('validacao');

function Resultado(valorA, valorB) {
    let total = valorB > valorA;
    return total;
}


form.addEventListener('submit', function(e){
    let formValido = false
    e.preventDefault();

    const valorA = parseInt(document.getElementById('valor-A').value);
    const valorB = parseInt(document.getElementById('valor-B').value);
    const menssagemSucesso = `Formulario Valido o Campo B é Maior que A `;
    const menssagemErro = `Formulario Invalido`;

    formValido = Resultado(valorA, valorB)
    if(formValido){
        const containerSucesso = document.querySelector('.sucess-menssage');
        containerSucesso.innerHTML = menssagemSucesso;
        containerSucesso.style.display = 'block'

      valorA.value = ' ';
      valorB.value  = ' ';
      
       

      
    }else {
        const containerErro = document.querySelector('.menssage-erro');
        containerErro.innerHTML = menssagemErro;
        containerErro.style.display = 'block'

       

    }


})

console.log(form);