import { Link } from "react-router-dom";
import { BiMoviePlay } from 'react-icons/bi'
import * as S from '../styles/style'


const Header = () =>{
  return(

       <S.header>
        <Link to='/'><S.title>Movie <span> Time</span></S.title></Link> 

        <S.navgation>
          <ul>
            <li><Link to='/' title="home"> home </Link> </li>
            <li><Link to='/movies' title="movies"> movies </Link> </li>
          </ul>
        </S.navgation>
       </S.header>
  )
}

export default Header;