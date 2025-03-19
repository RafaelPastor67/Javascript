const input = document.getElementById("input")
const button = document.getElementById("Button")
const ul = document.querySelector("ul")
button.addEventListener("click",procura)

function adiciona(jsondata){
    ul.innerHTML = '';
    li1 = document.createElement("li")
    li2 = document.createElement("li")
    li3 = document.createElement("li")
    li5 = document.createElement("li")
    li6 = document.createElement("li")
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li5);
    ul.appendChild(li6);

    li1.textContent = `Login: ${jsondata.login}`
    li2.textContent = `Seguidores: ${jsondata.followers}`
    li3.textContent = `Seguindo: ${jsondata.following}`
    li5.textContent = `Repositorios Publicos: ${jsondata.public_repos}`
    li6.textContent = `Link: ${jsondata.url}`

}

async function procura() {
    try{
        const devdata = await fetch(`https://api.github.com/users/${input.value}`)
        const jsondata = await devdata.json()

        if (jsondata.message === "Not Found") {
            throw new Error('Usuário não encontrado');}

        adiciona(jsondata)
        
    }
    catch{
        ul.innerHTML = '';
        console.error("Ocorreu um erro");
        li4 = document.createElement("li");
        li4.classList.add('erro');
        ul.appendChild(li4);
        li4.textContent = 'Ocorreu um erro ao buscar usuario';
    }
    
}


