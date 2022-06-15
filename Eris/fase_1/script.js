function faseUm()
{   
        var primeiraOpcao = `   
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
            <title>Fase 1 - Eris</title>
        </head>
        
        
            <header>
                <h1>Consequences?</h1>
            </header>
            <section>
                <div>
                <h1>GAME OVER!</h1>
                    <h2>Sua filha tossiu até a morte.</h2>
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
            <title>Fase 1 - Eris</title>
        </head>
        
        
            <header>
                <h1>Consequences?</h1>
            </header>
            <section>
                <div>
                    <h2>Você pegou sua filha e dirigiu em direção à nave.</h2>
                         <a href="../fase_2/index.html">Avançar</a>
                </div>
            </section>
            <footer> 
            </footer>  
        `;
        var resultado = prompt("Qual a sua escolha? Digite apenas a letra atribuída à alternativa.")
        if(resultado == "a"){
            document.write(primeiraOpcao)
        }
        else if(resultado == "b"){
            document.write(segundaOpcao)
        }
        
    } 
    
