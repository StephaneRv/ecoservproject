import { TextImageBlock, ImageTextBlock, ImageTextBlock3Parts } from '../components/UnLieuComponents';
import LogoContainer from '../components/Logos';
import FooterContainer from '../components/MentionsLegales';

import imgcarrousel1 from '../assets/images/unlieu/img-carrousel-1-1.webp';
import imgcarrousel2 from '../assets/images/unlieu/img-carrousel-1-2.webp';
import imgcarrousel3 from '../assets/images/unlieu/img-carrousel-1-3.webp';

import img2_1 from '../assets/images/unlieu/img-2-1.webp';
import img3_1 from '../assets/images/unlieu/img-3-1.webp';
import img3_2 from '../assets/images/unlieu/img-3-2.webp';
import { NavbarProps } from '../components/Navbar';
import "./UnLieu.css";

import {Navigation} from '../components/Navbar';

const UnLieu: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
  const images_carrousel_1 = [
    imgcarrousel1,
    imgcarrousel2,
    imgcarrousel3
  ]
  return (
    <html lang="eng">
      <head>
        <link rel="stylesheet" href="UnLieu.css" />
        <title>Un Lieu</title>
      </head>
      <body>
      <div className="unlieu-container">
            <Navigation activeTab={activeTab} onTabChange={onTabChange}/>
        </div>
        <TextImageBlock
          title='UN LIEU'
          text='Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort'
          images={images_carrousel_1}
        />
        <ImageTextBlock
          title='LE JARDIN'
          text='Inspiration quotidienne, dans son jus, le végétal
          s’exprime au gré du temps, dans ses moindres
          mouvements, discret ou profus, libre d’être soi.'
          image={img2_1}
        />
        <ImageTextBlock3Parts
          title='ESPRITS ENGAGÉS'
          text='Épouser une identité unique, pousser jusqu’à l’ultime sa passion sensible et émotionnelle, curieuse et libre d’être.'
          image={img3_1}
          bottomImage={img3_2}
        />
        <LogoContainer />
        <FooterContainer />
      </body>
    </html>
  );
};


export default UnLieu;
