document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    let tarefas = JSON.parse(localStorage.getItem ("tarefas"))  || []
        console.log(tarefas)

    const tarefa = {
        id: Date.now(),
        titulo: document.querySelector("#titulo").value,
        quilometragem: document.querySelector("#quilometragem").value,
        data: document.querySelector("#data").value
    }
    
    tarefas.push(tarefa)
    
    localStorage.setItem("tarefas", JSON.stringify ( tarefas ))

    window.location.href = "index.html"
})