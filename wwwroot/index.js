const processar = (event) => {
    event.preventDefault();
    const camponome = document.querySelector('#nome')
    const camposobrenome = document.querySelector('#sobrenome')

    const nomedigitado = camponome.value;
    const sobrenomedigitado = camposobrenome.value;

    console.log('nome= ', nomedigitado);
    console.log ('sobrenome= ', sobrenomedigitado);

    const nomecompleto = "Isadora Kondo";
    const nomecatalogo = "KONDO, Isadora";
//
fetch('/Nome', {
    method: 'POST',
    headers: {
        "Content-Type": "Aplication/json",
    }
    //PAREI AQUI SOCORRROOOOOOOOOOOOO
})
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
    <div>Nome Completo = ${nomecompleto}</div>
    <div>Nome Catalogo = ${nomecatalogo}</div>
    `;

};


document.addEventListener("DOMContentLoaded" , () => {
const botaoProcessar = document.querySelector('#processar');
botaoProcessar.addEventListener('click', processar);
 });
