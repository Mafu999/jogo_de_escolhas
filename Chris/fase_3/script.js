function faseTres(){
    var primeiraOpcao = `   
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet">
        <title>Fase 3 - Chris</title>
    </head>
    
    
        <header>
            <h1>Consequences?</h1>
        </header>
        <section>
            <div>
            <h1>GAME OVER!</h1>
                <h2>Todos começam a gritar "ignorante", repetidas vezes. Te capturam e
                te jogam numa cela</h2>
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
                <h2>Após ingerir a barra, você se sente muito bem
                as coisas começam a ficar incertas, tudo ao seu redor derrete
                e você apaga.</h2>
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