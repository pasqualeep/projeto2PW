window.addEventListener("load", atualizar)
    
function atualizar(){
        document.querySelector("#lista-manutencao").innerHTML = ""
        let tarefa = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefa.forEach(tarefa => criarCard(tarefa))
}


function criarCard(tarefa) {
    const card = document.createElement("div")
    card.classList.add("cool", "s12", "m6", "l4")
    card.innerHTML = `
    
    <div class="card">
    <div class="card-content">
        <span class="card-title">${tarefa.titulo} </span>
            <p>${tarefa.quilometragem} </p>
            <p>${tarefa.data} </p>
        </div>
        <div class="card-action">
            <div class="col">
                <a href="#" class="btn red"  onClick = "apagar (${tarefa.id})" >Excluir</a>
            </div>
             <div class="col">
             <a href="#" id="botao-cadastrar" class="btn green"  onClick = "concluir (${tarefa.id})" >Concluir</a>
            </div>
        </div>
       

`

document.querySelector("#lista-manutencao").appendChild(card)

}