  const filmes = [
      {
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção"
      },
      {
        titulo: "Vingadores: Ultimato",
        ano: 2019,
        genero: "Ação"
      },
      {
        titulo: "Corra!",
        ano: 2017,
        genero: "Terror"
      },
      {
        titulo: "O Máskara",
        ano: 1994,
        genero: "Comédia"
      },
      {
        titulo: "Clube da Luta",
        ano: 1999,
        genero: "Drama"
      },
      {
        titulo: "Duna",
        ano: 2021,
        genero: "Ficção"
      }
    ];

    const listaFilmes = document.getElementById("listaFilmes");
    const erro = document.getElementById("erro");

    function mostrarFilmes(lista){
      listaFilmes.innerHTML = "";

      if(lista.length === 0){
        listaFilmes.innerHTML = `
          <p class="sem-resultados">
            Nenhum filme encontrado.
          </p>
        `;
        return;
      }

      lista.forEach(filme => {
        listaFilmes.innerHTML += `
          <div class="card">
            <h3>${filme.titulo}</h3>
            <p><strong>Ano:</strong> ${filme.ano}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
          </div>
        `;
      });
    }

    function filtrarFilmes(){

      erro.innerHTML = "";

      const ano = document.getElementById("ano").value;
      const genero = document.getElementById("genero").value;

      if(ano !== ""){
        if(isNaN(ano)){
          erro.innerHTML = "O ano deve ser numérico.";
          return;
        }

        if(ano < 1900 || ano > 2026){
          erro.innerHTML = "Digite um ano válido entre 1900 e 2026.";
          return;
        }
      }

     
    
      if(genero === ""){
        erro.innerHTML = "Selecione um gênero.";
        return;
      }

// filtro 

      const resultado = filmes.filter(filme => {

        const mesmoGenero = filme.genero === genero;

        const mesmoAno = ano === "" || filme.ano == ano;

        return mesmoGenero && mesmoAno;
      });

      mostrarFilmes(resultado);
    }

   
    mostrarFilmes(filmes);