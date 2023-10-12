window.addEventListener("load", () => {
    let tarefa = JSON.parse(localStorage.getItem("tarefas"))
    tarefas.forEach((tarefas) =>{
        console.log(tarefa)
    })
})