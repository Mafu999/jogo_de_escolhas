function faseDois(){
    var primeiraOpcao = `   
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
        <title>Fase 2 - Chris</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
            <h1>GAME OVER!</h1>
                <h2>Todos reagiram agressivamente e alguns decepcionados. Você
                foi linchado por eles.</h2>
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
                <h2Você se apresenta, nome e lugar de origem. Fala da tempestade e que sente fome e sede. Alguns
                debocham e outros prontamente te oferecem agua e uma barra marrom mole.</h2>
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