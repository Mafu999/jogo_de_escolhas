function faseDois(){
    var primeiraOpcao = `   
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
        <title>Fase 2 - Cleiton</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
            <h1>GAME OVER!</h1>
                <h2>Você chegou no local de entrega e se deparou com um homem mal encarado.
                ele estalou os dedos e agentes do governo surgiram, cheio de armas apontadas 
                pra você.</h2>
                     <a href="../../Pagina Inicial/index.html">Retornar</a>
            </div>
        </section>
        <footer> 
        </footer>   
    
    
    `;
    var segundaOpcao = `   
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
        <title>Fase 2 - Cleiton</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
                <h2>Você se aprofundou mais e em 3 dias descobriu que aquele cliente é um agente
                de uma força tarefa do governo. E descobriu também que essa força tarefa está
                especificamente atrás de você, inclusive o nome do caso é o nome de seu falecido
                pai.</h2>
                     <a href="../fase_3/index.html">Avançar</a>
            </div>
        </section>
        <footer> 
        </footer>   
    `;
    var resultado = prompt("Qual a sua escolha? Digite Apenas a letra atribuída à alternativa.")
        if(resultado == "a"){
            document.write(primeiraOpcao)
        }
        else if(resultado == "b"){
            document.write(segundaOpcao)
        }
}