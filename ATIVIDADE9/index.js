const input = document.getElementById("input")
const button = document.getElementById("Button")
const ul = document.querySelector("ul")
button.addEventListener("click",()=> )

function adiciona(jsondata){
    li = document.createElement("li")
    li.textContent = jsondata
    ul.appendChild(li)
}

async function procura() {
    const devdata = await fetch(`https://api.github.com/users/${input.value}`)
    const jsondata = await devdata.json()
    return(jsondata)
}


