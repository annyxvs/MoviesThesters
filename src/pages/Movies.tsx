import Header from '../components/Header';
import * as G from '../styles/global'
import * as S from '../styles/style'
import * as M from '../styles/movies'
import { useState } from 'react';
import { useEffect } from 'react';
import { Movie } from '../types/movie';

const Movies = () =>{

  const [movies,setMovies] = useState<Movie[]>([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    handleLoadMovies();
  }, []);

  const handleLoadMovies = async () =>{
    setLoading(true);
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json();
    setMovies(json);
    setLoading(false);
  }

  return(
    <G.conteiner>
      <M.movies>
        <Header/>

        {loading &&
          <S.loading>Loading...</S.loading>
        }
        
        <M.listMovies>
          {movies.map((item,index)=>(
            <M.card_movies>
              <img src={item.avatar} alt={item.titulo}/>
              <p>{item.titulo}</p>
            </M.card_movies>
          ))}
        </M.listMovies>
      </M.movies>
    </G.conteiner>
  )
}

export default Movies;