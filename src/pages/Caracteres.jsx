import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Caracteres() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoadign] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        console.log(response)
        setLoadign(false);
        setCharacter(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [id]);


  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className='flex flex-col justify-center items-center '>


      <div className='  Center text-white' key={character.id}>
        <h3 className='text-4xl text-center py-8' >{character.name}</h3>
        <img className='rounded-full'

          src={character.image}
          alt={character.name}
        />

        <div className='flex flex-col-reverse text-center py-5 gap-1 text font-mono'>
          <p>{character.status.name}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.location.name}</p>

        </div>




        {/* {Array.isArray(character.episode) ? (
          character.episode.map((epi) => (
            <div cla key={epi.id}>
              <p>{epi}</p>
            </div>
          ))
        ) : (
          <div>
            <p>
              no hay informacion
            </p>
          </div>

        )} */}
      </div>

    </div>
  );
}
export default Caracteres;
