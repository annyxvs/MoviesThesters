import styled from 'styled-components'
import {colorBackground,textColor} from './global'
import imageback from '../images/circle.png'

export const card_movies = styled.div`
  border: 2px ${colorBackground} solid;
  border-radius: 0.2rem;
  background-color: ${colorBackground};

  padding: 0.3rem;
  padding-top: 1rem;
  margin: 0.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const listMovies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  margin: 2rem;

  text-transform: uppercase;


  img{
    width: 13vw;
    height: 35vh;
  } 
`

export const movies = styled.div`
  color: ${textColor};
  
  display: flex;
  width: 100vw;
  height: auto;

  background-image: url(${imageback});
  background-repeat: no-repeat;
  background-size: cover;

  header{
    height: auto;
    padding: 0.5rem;
  }
`
