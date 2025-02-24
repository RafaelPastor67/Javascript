const input = document.getElementById('input');
const button = document.querySelector('button');
const ul = document.getElementById('tarefas');
let tarefas = [];

function carregar(){
    tarefasLocal = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefasLocal){
        tarefas = tarefasLocal
    }
    tarefas.forEach(adicionar)
}

carregar()

button.addEventListener('click', ()=>{
    let tarefa = {
        nome: input.value,
        status:false
    }
    tarefas.push(tarefa);
    
    adicionar(tarefa)
    salvar()
})

function salvar(){
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
}

function adicionar(tarefa){
    const li = document.createElement('li');
    li.textContent=tarefa.nome;
    ul.appendChild(li);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = tarefa.status;
    li.appendChild(checkbox);

    li.style.textDecoration = tarefa.status ? 'line-through' : 'none';
    /////////Atualiza a Checkbox\\\\\\\\\\
    checkbox.addEventListener('change', (event) => {
        tarefa.status = event.target.checked;
        li.style.textDecoration = tarefa.status ? 'line-through' : 'none';
        salvar()
    })
        
}


