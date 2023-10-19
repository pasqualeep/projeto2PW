function concluir (id){
    
    const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
    
    let tarefa = tarefas.find(t => t.id === id)

    tarefa.concuida = true


    localStorage.setItem("tarefas", JSON.stringify (tarefas))

    atualizar()
}