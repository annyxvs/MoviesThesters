import styled, { createGlobalStyle } from 'styled-components'
import img from '../images/wave.png'
import imageback from '../images/circle.png'


const colorBackground = '#0E091B';
const textColor = '#04D361';
const secColor = '#171220';
const colorMain = '#340E71';
const bntColor = "#2E2740";
const font = "'Oswald', sans-serif";


export const header = styled.header`
  background-color: ${colorBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color : ${textColor};


  width: 5rem;
  height: 100vh;
  z-index: 9999;

  left: 0;
  right: 0;

  align-items: center;
  text-align: center;

  font-weight: 550;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: 'Oswald', sans-serif;

  a{
    color : ${textColor};
    text-decoration: none;
  }

`

export const navgation = styled.nav`
  margin-bottom: 4.5rem;

  ul{
    margin:0;
    padding: 0;
  }

  li{
    display: flex;
    justify-content: space-arrond;
    list-style:none;
  }

  a{
    text-decoration: none;
    color: ${textColor};
    padding: 0.5rem;
    font-weight: 400;
  }
  
  li :hover {
    background-color: ${secColor};
    border-radius: .2rem;
  }
`

export const title = styled.h1`
  margin-top: 4.5rem;

  font-size: 1.5rem;

  span{
    padding: 0.2rem;
    border-radius: 0.5rem;

    background-color: ${textColor};

    color: ${secColor}
  }
`

export const conteiner = styled.div`
  display:flex;
  
  overflow: hidden;
`

export const main = styled.div`
  background: url(${img});
  background-size: contain;
  color: ${textColor};
  
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 4rem;
  
  aside{
    margin-left: 5rem;
    margin-top: 1.5rem;
  }
`

export const button = styled.button`
  border: none;
  border-radius: 0.4rem;

  padding: 1.5rem;
  text-align: center;

  background-color: ${bntColor};
  color: #f0C808;

  transition: .5s;
  cursor: pointer;

  font-size: 1.2rem;

  :hover{
    background-color: #f0C808;
    color: black;
  }
`
export const text = styled.p`
  font-family: ${font};
  font-size: 1.5rem;

  margin-top: 12rem;
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
export const loading = styled.div`
  width: 100vw;
  height: 100vh;

  padding-left: 10rem;

  display: flex;
  align-items: center;
  font-size: 3rem;
  text-transform: uppercase;

  font-family: ${font};

  background-color: ${colorBackground};
`