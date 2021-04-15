function faseTres(){
    var primeiraOpcao = `   
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
        <title>Fase 3 - Cleiton</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
            <h1>GAME OVER!</h1>
                <h2>Você nunca vai saber a verdade sobre seu pai.</h2>
                     <a href="../../index.html">Retornar</a>
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
        <title>Fase 3 - Cleiton</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
                <h2>Chegando ao palácio, você é muito bem recebido, no saguão existe uma espécie de
                museu, com fotos de soldados e um destaque glorioso às fotos de seu pai. Um sentimento
                de confusão toma teu corpo e seus olhos ficam vermelhos quando olha no alto da escada e
                vê a silhueta do ditador, segurando um copo de whiskey.</h2>
                     <a href="continua.html">Avançar</a>
            </div>
        </section>
        <footer> 
        </footer>   
    `;
    var resultado = prompt("Qual a sua escolha? Diite apnas a letra atribuida à alternativa.")
        if(resultado == "a"){
            document.write(primeiraOpcao)
        }
        else if(resultado == "b"){
            document.write(segundaOpcao)
        }
}