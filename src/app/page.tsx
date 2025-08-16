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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4x1 font-bold">{obterSaudacao(null)}</h1>
    </div>
  );
}

