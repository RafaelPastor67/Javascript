/////////////////////////////////////////////////////////////////Definindo Variaveis e carregando algumas coisas do LocalStorage
const input = document.querySelector("textarea")
const botao_postar = document.getElementById("post")
const botao_fechar = document.querySelector(".x")
const botao_abrir = document.getElementById("user")
const popup = document.querySelector(".pop-up-off")
const username = document.getElementById("edit")
const timeline = document.querySelector(".post")
const confirm_button = document.querySelector('.confirm-button')
const darkSwitch = document.querySelector('.switch')
const ball = document.querySelector('.ball')
const body = document.querySelector('body')
let contadorPost;

username.value = JSON.parse(localStorage.getItem("username"))
let ArmazenaPosts = JSON.parse(localStorage.getItem("lSPost")) || [];

if(ArmazenaPosts.length){
    contadorPost = ArmazenaPosts[ArmazenaPosts.length-1].id
}
else{
    contadorPost = 0
}
///////////////////////////////////////////////////////Resgata tema do LocalStorage
function carregarTemaGeral(){
    const isLightTheme = localStorage.getItem('theme') === 'light';
    if (isLightTheme) {
        ball.classList.add('active');
        body.classList.add('white');
        input.classList.add('white');
    } else {
        ball.classList.remove('active');
        body.classList.remove('white');
        input.classList.remove('white');
    }
}
darkSwitch.addEventListener('click', ()=> {
    ball.classList.toggle('active');
    body.classList.toggle('white');
    input.classList.toggle('white');

    if (ball.classList.contains('active')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
})

carregarTemaGeral()

////////////////////////////////////////////////////// abrir e fechar pop-up

botao_abrir.addEventListener("click", () => {
    popup.classList.toggle("pop-up-on")
    popup.classList.toggle("pop-up-off")
    username.value = JSON.parse(localStorage.getItem("username"))
})

botao_fechar.addEventListener("click", () => {
    popup.classList.remove("pop-up-on")
    popup.classList.add("pop-up-off")
})
///////////////////////////////////////////////////// textarea expandir sozinho

input.addEventListener("input", function () {
    this.style.height = "auto"; 
    this.style.height = this.scrollHeight + "px";
})

///////////////////////////////////////////////////////// pop-up arrastavel*

let isDragging = false;
let offsetX, offsetY;

popup.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.getBoundingClientRect().left;
    offsetY = e.clientY - popup.getBoundingClientRect().top;
    popup.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    popup.style.left = `${e.clientX - offsetX}px`;
    popup.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    popup.style.cursor = "default";
});

////////////////////////////////////////criar Postagem
function criarPostagem(postagem){

const divPost = document.createElement('div')
divPost.classList.add('postagem')
divPost.id = contadorPost
timeline.prepend(divPost)

const pfp_and_name = document.createElement('div')
pfp_and_name.classList.add('pfp_and_name')
divPost.appendChild(pfp_and_name)

const pfp = document.createElement('img')
pfp.classList.add('pfp')
pfp.src = "pfp.jpg";
pfp_and_name.appendChild(pfp)

const nomeuser = document.createElement('p')
pfp_and_name.appendChild(nomeuser)
nomeuser.textContent = postagem.nome_de_usuario

const time = document.createElement('p')
pfp_and_name.appendChild(time)
time.textContent = dataHora(postagem)
time.classList.add('date')

const content = document.createElement('div')
content.classList.add('content')
divPost.appendChild(content)

const texto = document.createElement('p')
content.appendChild(texto)
texto.textContent = postagem.texto

const imgGatinho = document.createElement('img')
content.appendChild(imgGatinho)
imgGatinho.classList.add('imgGatinho')
imgGatinho.src= postagem.imagem


const actions = document.createElement('div')
actions.classList.add('actions')
divPost.appendChild(actions) 

const curtida = document.createElement('div')
curtida.classList.add('curtida')
actions.appendChild(curtida)

const coraçao = document.createElement('i')
curtida.appendChild(coraçao)
coraçao.id = 'coracaoAntes'
coraçao.classList.add('bx', 'bx-heart')

const contadorCurtida = document.createElement('p')
contadorCurtida.textContent = postagem.curtidas
curtida.appendChild(contadorCurtida)

const usuariosQueCurtiram = document.createElement('p')
usuariosQueCurtiram.classList.add('user-curtiu')
divPost.appendChild(usuariosQueCurtiram)
usuariosQueCurtiram.textContent= fomataQuemCurtiu(postagem)

function fomataQuemCurtiu(postagem){ // User Curtiu / User1 e User2 curtiram/ User1, User2 e mais X curtiram
    if(postagem.usuariosCurtiram.length){

        if (postagem.usuariosCurtiram.length===1){
            return postagem.usuariosCurtiram + ' Curtiu'
        }
    
        else if(postagem.usuariosCurtiram.length===2){
            return postagem.usuariosCurtiram[0]+ ' e ' + postagem.usuariosCurtiram[1] + ' Curtiram'
        }
        else if(postagem.usuariosCurtiram.length>2){
            return postagem.usuariosCurtiram[0]+ ', ' + postagem.usuariosCurtiram[1]+ ' e mais ' + ((postagem.usuariosCurtiram.length)-2) +' Curtiram' 
        }
    }
}



    coraçao.addEventListener('click', ()=>{ //Quando clicar no coração registrar numero de curtida e quem curtiu
        if(username.value){
        postagem.curtidas++
        contadorCurtida.textContent = postagem.curtidas

        for(let i =0; i<ArmazenaPosts.length;i++){
            if(postagem.id === ArmazenaPosts[i].id){

                if(!ArmazenaPosts[i].usuariosCurtiram.includes(username.value)){

                    ArmazenaPosts[i].usuariosCurtiram.push(username.value)
                    
                    usuariosQueCurtiram.textContent = fomataQuemCurtiu(ArmazenaPosts[i])
                }
                
                ArmazenaPosts[i].curtidas= postagem.curtidas
                break
            }
            
        }
        localStorage.setItem("lSPost", JSON.stringify(ArmazenaPosts))
    }
    else{
        alert("Por favor, insira um nome de usuário antes de Curtir.");
    }
    })

/////////////////////////////////////////Carregar Tema pt2
function carregarTema(){

    if (localStorage.getItem('theme') === 'light') {

        carregarTemaGeral()
        contadorCurtida.classList.add('light')
        coraçao.classList.add('light')
        time.classList.add('light')
        
    }
}
document.addEventListener("DOMContentLoaded", carregarTema())
darkSwitch.addEventListener('click', ()=> {
    contadorCurtida.classList.toggle('light')
    coraçao.classList.toggle('light')
    time.classList.toggle('light')
})
/////////////////////////////////////////
}

////////////////////////////////////////////Carregar Postagens

if(JSON.parse(localStorage.getItem("lSPost"))){
postResgatado = JSON.parse(localStorage.getItem("lSPost"))

for(let i = 0; i < postResgatado.length; i++){
criarPostagem(postResgatado[i])
}
}



///////////////////////////////////////Salvar User no LocalStorage

confirm_button.addEventListener("click", ()=> {
    localStorage.setItem("username",JSON.stringify(username.value))
    
})


///////////////////////////////////////Data-hora
function dataHora(postagem){
    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    let final;

    const horaPostagem = new Date(postagem.hora)
    let atual = new Date()
    let diferença = atual - horaPostagem
    if(diferença<minuto){
        final = '· Agora há pouco'
    }
    else if(diferença<hora){
        final = Math.floor(diferença/minuto) === 1?  ' 1 minuto atrás' : Math.floor(diferença/minuto) + ' minutos atrás'
    }
    else if(diferença<12*hora){
        final = Math.floor(diferença/hora) === 1?  ' 1 Hora atrás' : Math.floor(diferença/hora) + ' Horas atrás'
    }
    else if(diferença<24*hora){
        final = `Hoje às ${horaPostagem.getHours().toString().padStart(2, '0')}:${horaPostagem.getMinutes().toString().padStart(2, '0')}`;
    }
    else{
        console.log('caiu no else')
        final = '· '+ (horaPostagem.getDate().toString().padStart(2,'0')) + '/'+ ((horaPostagem.getMonth() +1) .toString().padStart(2,'0')) + '/' +(horaPostagem.getFullYear())
    }

    return final
    
}


//////////////////////////////////////// Clicar em postar
botao_postar.addEventListener("click", ()=> {
    
    if (JSON.parse(localStorage.getItem("username")) == null|| JSON.parse(localStorage.getItem("username")) == ""){
        alert("Por favor, insira um nome de usuário antes de postar.");
        return;
    }

    else{

        contadorPost++

    async function buscarGato() {
        try {
          let userStorage = JSON.parse(localStorage.getItem("username"))
          
          const response = await fetch("https://api.thecatapi.com/v1/images/search");
          const data = await response.json(); // Converte a resposta para JSON

          let postagem = {
            nome_de_usuario: userStorage,
            texto: input.value,
            imagem: data[0].url,
            hora: new Date(),
            id: contadorPost,
            curtidas: 0,
            usuariosCurtiram:[]
          }


          criarPostagem(postagem)


          
          ArmazenaPosts.push(postagem)
          localStorage.setItem("lSPost", JSON.stringify(ArmazenaPosts))
          
        }
        
         catch (error) {
          console.error("Erro ao buscar imagem:", error);
        }

            
        
        input.value = ""    
    }
      
    buscarGato()

    
    }
})





