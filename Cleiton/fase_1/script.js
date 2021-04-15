function faseUm()
{   
        var primeiraOpcao = `   
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
            <title>Fase 1 - Cleiton</title>
        </head>
        
        
            <header>
                <h1>Consequences?</h1>
            </header>
            <section>
                <div>
                <h1>GAME OVER!</h1>
                    <h2>Você foi tomar banho e quando foi lavar o pé escoregou bateu a cabeça no
                    canto da banheira e morreu.</h2>
                         <a href="index.html">Retornar</a>
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
            <title>Fase 1 - Cleiton</title>
        </head>
        
        
            <header>
                <h1>Consequences?</h1>
            </header>
            <section>
                <div>
                    <h2>Você correu para checar o sinal de alerta, afinal ele só
                    toca quando algo de incomum acontece.</h2>
                         <a href="../fase_2/index.html">Avançar</a>
                </div>
            </section>
        `;
        var resultado = prompt("Qual a sua escolha? Digite apenas a letra atribuída à alternativa.")
        if(resultado == "a"){
            document.write(primeiraOpcao)
        }
        else if(resultado == "b"){
            document.write(segundaOpcao)
        }
        
    } 
    
