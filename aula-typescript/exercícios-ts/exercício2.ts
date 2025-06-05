//declaração das cidades

const city: string[] = ['Jundiaí', 'Caraguatetuba', 'Xique-Xique', 'Gavião Peixoto', 'Campinas'];

//função da lista

function listar (lista: string[]): void {
  lista.forEach(city => console.log(city));
}

//chamado

listar(city)