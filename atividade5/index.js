const usuarios = []
let usuario = ''
const paragrafo = document.querySelector('p');
const inputText = document.getElementById('input');

inputText.addEventListener('input', (event) => {
 usuario = event.target.value ;
})

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    if(usuario != '') {
        if(usuarios.includes(usuario)){
            alert('Esse usuário já curtiu')
        }
        else{
        usuarios.push(usuario);
        if(usuarios.length == 1){
            paragrafo.innerText = `${usuarios} curtiu`;
        }
        else if(usuarios.length == 2){
            paragrafo.innerText = `${usuarios.join(' e ')} curtiram`;
        }
        else if(usuarios.length > 2){
            paragrafo.innerText = `${usuarios[0]}, ${usuarios[1]}  e mais ${usuarios.length - 2} curtiram`;
        }
    }
    }
    else{
        alert('Digite um nome')
    }
})


