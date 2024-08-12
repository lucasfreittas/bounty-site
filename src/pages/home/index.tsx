import { BannerHero, HomeContainer } from "./styles";
import { Button } from "@/components/Button";

import Image from "next/image";

import BannerModel from '../../assets/banner-hero-model.png';
import BannerMobile from '../../assets/banner-hero-mobile.png';

export default function Home() {
    return(
      <HomeContainer>
        <BannerHero>
          <Image className='modelImage' src={BannerModel} height={708} quality={100} alt='Modelo negra com blusa azul segurando óculos branco no rosto'/>
          <div className="textContainer">
            <h1 className="line1">Assuma o</h1>
            <h1 className="line2">controle</h1>
            <h1 className="line3">das despesas</h1>
            <h1 className="line4">corporativas</h1>

            <div>
              <Button text="Abra a sua conta" size="lg"/>
            </div>
          </div>
          <Image className='mobileImage' src={BannerMobile} height={450} quality={100} alt='Modelo negra com blusa azul segurando óculos branco no rosto'/>
        </BannerHero>
      </HomeContainer>
    )
  }
  