import Header from '../components/Header';
import * as S from '../styles/style'
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
    <S.conteiner>
      <S.movies>
        <Header/>

        {loading &&
          <S.loading>Loading...</S.loading>
        }
        
        <S.listMovies>
          {movies.map((item,index)=>(
            <S.card_movies>
              <img src={item.avatar} alt={item.titulo}/>
              <p>{item.titulo}</p>
            </S.card_movies>
          ))}
        </S.listMovies>
      </S.movies>
    </S.conteiner>
  )
}

export default Movies;