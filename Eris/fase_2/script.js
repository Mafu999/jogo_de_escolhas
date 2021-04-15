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
                <h2>O técnico dos robôs aparece bem na hora que vc começou a hackear.</h2>
                <a href="../fase_3/index.html">Avançar</a>
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
        <title>Fase 2 - Eris</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
            <h1>GAME OVER!</h1>
                <h2>Um alarme foi acionado quando vocês entraram na nave pelo trem de pouso
                um robô policial de dentro logo te localizou e pulverizou com sua arma de raio
                você e sua filha.</h2>
                     <a href="../../index.html">Retornar</a>
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