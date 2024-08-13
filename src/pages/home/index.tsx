import { BannerHero, HomeContainer, MainContainer, BrandVideo, CardsSection } from "./styles";
import { Button } from "@/components/Button";

import Image from "next/image";

import BannerModel from '../../assets/banner-hero-model.png';
import BannerMobile from '../../assets/banner-hero-mobile.png';
import BountyCards from '../../assets/bounty-cards.png';
import BountyBoomerang from '../../assets/Boomerang.png';

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
          <div className="whiteBorder"></div>
        </BannerHero>
        
        <MainContainer>
          <BrandVideo>
            <h1><span>Gestão financeira</span> eficaz para a sua empresa</h1>
              <div>
                <iframe
                  width="924"
                  height="520"
                  src="https://www.youtube.com/embed/1j084HDB7Kc?controls=1&autoplay=1&mute=1&rel=0&loop=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; loop"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
          </BrandVideo>

          <CardsSection>
            <div className='cardSectionTitle'>
              <h1>Mais <span>organização e produtividade</span> para a sua equipe</h1>
            </div>  
              <div className='cardsContainer'>
                <Image className='boomerang' src={BountyBoomerang} width={146} alt='boomerang Bounty' />
                <Image className='bountyCards' src={BountyCards} width={675} alt='cartões bounty azul'/>
                <p>A plataforma de controle financeiro com cartões corporativos virtuais 
                    pré-pagos e ilimitados.
                </p>
              </div>
          </CardsSection>
        </MainContainer>
      </HomeContainer>
    )
  }
  