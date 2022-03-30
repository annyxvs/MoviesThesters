import styled, { createGlobalStyle } from 'styled-components'
import img from '../images/wave.png'
import {colorBackground,textColor,secColor,colorMain,bntColor,font} from './global'

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

  display: flex;
  flex-direction: column;

  span{
    padding: 0.2rem;
    border-radius: 0.5rem;

    background-color: ${textColor};

    color: ${secColor};
  }
`

export const main = styled.div`
  background-color: black;

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

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;

    aside{
      margin-left: 0rem;
    }
  }

  @media (max-width: 600px) {

    margin: 1rem;

    aside{
      display: none;
    }
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

export const loading = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;

  font-family: ${font};
  font-weight: bold ;

  background-color: ${colorBackground};
`