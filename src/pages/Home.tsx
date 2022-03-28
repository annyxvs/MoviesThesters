import Header from "../components/Header";
import Img_main from '../images/entretenimento.png'
import * as S from '../styles/style'
import { AiFillStar } from 'react-icons/ai'

const Home = () =>{
  return(
     <S.conteiner>
       <Header/>
        <S.main>
          <S.grid>
            
          <div className="text">

          <S.text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum labore et pariatur eius nostrum quod harum distinctio ratione esse inventore sit laudantium atque, omnis officia debitis obcaecati! Repellat, voluptatem?</S.text>

          <S.button>Get start <AiFillStar/> </S.button>
          
          </div>
          
          <aside>
            <img src={Img_main} alt=""/>
          </aside>

          </S.grid>
        </S.main>
     </S.conteiner>

  )
}

export default Home;