<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="tudo">

    
   <section class="secao">
        <div class="cima">
            <img src="/icons/whatsapp.png" alt="zap" width="30px">
            <h3>Empresa</h3>
        </div>
        <p>Olá! Insira seus dados para ser direcionado para o WhatsApp:</p>
            
  <div class="formulario">

  <label for="nome">Seu nome</label>
           <input type="text" id="nome" placeholder="Digite o seu nome">

   <label for="email">Seu e-mail</label>
                <input type="email" id="email" placeholder="exemplo@gmail.com">

  <label for="phone">Seu Whatsapp</label>
                <input type="number" id="phone" placeholder="+55 (88) 98888-8888">

        

   <button onclick="zap()">Ir para o Whatsapp</button>

   </div>
        </section>


  </div>
        <script src="script.js"></script>
</body>
</html>
