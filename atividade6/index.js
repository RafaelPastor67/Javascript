const input = document.getElementById('input');
const button = document.querySelector('button');
let tarefas = [];
const ul = document.querySelector('ul');
const checkbox = document.querySelectorAll('.checkbox');
function adicionarTarefa() {
    let tarefa = {
        nome: input.value,
        status: false
    };

    console.log(tarefa);
    const li = document.createElement('li');
    li.textContent = tarefa.nome ;
    ul.appendChild(li);

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    li.appendChild(checkbox);

    tarefas.push(tarefa);
    console.log(tarefas);

    checkbox.addEventListener('change', (event) => {
        tarefa.status = event.target.checked;
        li.style.textDecoration = tarefa.status ? 'line-through' : 'none';})
}

button.addEventListener('click', adicionarTarefa);
