import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function NavPage(props) {
  return (
    <header className='flex justify-between '>
      <p>Page: {props.page}</p>
      <button
        className='   p-2 rounded-full bg-sky-600 hover:bg-sky-300 '
        onClick={() => props.setPage(props.page + 1)}
      >
        <span className='text-sm'>Page: {props.page + 1} </span>
      </button>
    </header>
  );
}

function Page(props) {
  return (
    <div className='flex justify-between '>
      <p>Page: {props.page}</p>
      <button
        className='   p-2 rounded-full bg-sky-600 hover:bg-sky-300 '
        onClick={() => props.setPage(props.page - 1)}
      >
        <span> Page: {props.page - 1} </span>
      </button>
    </div>
  );
}

function CaracteresLista() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoadign] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoadign(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className='  text-white bg-black'>

      
      <NavPage page={page} setPage={setPage} />

      <div className=' grid grid-cols-4 gap-5 font-mono '>
        {character.map(character => {
          return (
            <Link to={'/caracteres/' + character.id} key={character.id}>
              <h3 >{character.name}</h3>

              <img
                className='rounded-full'
                src={character.image}
                alt={character.name}
              />

              <p>{character.origin.name}</p>
              <p>{character.status.name}</p>
            </Link>
          );
        })}
      </div>

      <Page page={page} setPage={setPage}></Page>
    </div>
  );
}

export default CaracteresLista;
