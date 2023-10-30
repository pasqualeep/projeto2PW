
function calcularEstatisticas(){

    const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const qtdePendentes = pendentes.lenght    

    document.querySelector("#qtadep").innerHTML = qtdePendentes

    

    const concluidas = tarefas.filter(t => t.concluida == true)
    const qtdeConcluida = concluidas.lenght
    
    document.querySelector("#qtdec").innerHTML = qtdeConcluida
    
   

calcularEstatisticas()
}