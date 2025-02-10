const biblioteca = []
function adicionarLivro(titulo,autor,quantidade){ 
    const livroexiste = biblioteca.find(livro => livro.titulo === titulo);
    if(livroexiste){
        console.warn('Esse livro ja esta na biblioteca')
        return
    }
    else{
    var livro ={
        titulo:titulo,
        autor:autor,
        quantidade:quantidade
    }
    biblioteca.push(livro)
    }
}
function removerLivro(titulo){
    let index = biblioteca.findIndex(livro => livro.titulo === titulo)
    if (index == -1){
        console.warn('Titulo não encontrado')
    }
    else{
        biblioteca.splice(index,1)
    }
}
function atualizarQuantidade(titulo,novaQuantidade){
    let index = biblioteca.findIndex(livro => livro.titulo === titulo)
    if (index == -1){
        console.warn('Titulo não encontrado')
    }
    else{
        biblioteca[index].quantidade = novaQuantidade
    }
}
function listarLivros(){
    console.log(biblioteca)

}

adicionarLivro('O encouraçado','Benedict Roosevelt',42000)
adicionarLivro('A maça','Antonina Nunez',12500)
adicionarLivro('The finals','Diego Frade',14600)

listarLivros()
adicionarLivro('O encouraçado','Benedict Roosevelt',42000)