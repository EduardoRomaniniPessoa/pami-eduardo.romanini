//interface do livro legal e divertido, usado para seguir uma régua de preenchimentos

interface livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
  }
  
//preenchimento do nosso interface

  const nossoLivro: livro = {
    titulo: "Manifesto Comunista",
    autor: "Karl Marx",
    anoPublicacao: 1848
  };

//function para exibição do interface preenchido

  function exibir(livro: livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
  }
//chamado

  exibir(nossoLivro);

//amo deixar funções no infinitivo