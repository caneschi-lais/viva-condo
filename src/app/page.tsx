type Morador = {
  primeiroNome: string;
  sobrenome: string;
};

// formata os nomes dos moradores
function formatarNomeMorador(morador: Morador): string {
  return morador.primeiroNome + ' ' + morador.sobrenome;
}

function obterSaudacao (morador: null | Morador) {
  if (morador) {
    return <span>Olá, {formatarNomeMorador(morador)}!</span>;
  }
  return <span>Olá, Guerreiro!</span>;
}

export default function Home() {
  function formatarNomeMorador (morador: any){
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  //object
  const morador = {
    primeiroNome: 'Lux',
    sobrenome: 'Sol'
  };

  return(
    <div id="principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul" className="card-azul">
        <h1 id="nome" className="text-2xl font-bold text-center">
            {obterSaudacao(morador)}
        </h1>
        </div>
    </div>
  );
}

