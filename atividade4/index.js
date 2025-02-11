const titulo = document.querySelectorAll('h1');
titulo[0].innerText = ' Alterando o título da página';

const wallpaper = document.querySelector('.wallpaper');

const paragrafo = document.querySelectorAll('p');
for (let i=0; i<paragrafo.length; i++){
    paragrafo[i].classList.add('paragrafo');
}

const botao = document.querySelector('button');
botao.addEventListener('click', ()=>wallpaper.classList.toggle('wallpaper-black'))
botao.textContent = 'Troquei com JS'