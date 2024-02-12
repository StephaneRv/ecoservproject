import Carousel from "../components/Carousel";
import FooterContainer from "../components/MentionsLegales";
import LogoContainer from "../components/Logos";

import { Navigation, NavbarProps } from "../components/Navbar";

import img1_2 from '../assets/images/accueil/1_2.webp';

import img1_3 from '../assets/images/accueil/1_3.webp';

import imgmap from '../assets/map_NousContacter.webp'

import "./Accueil.css";
import "./texts.css";

const FirstPage: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
  return (
    <div>
      <Container activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ display: 'flex', flexDirection: "row" }}>
      </div>
    </div>
  );
}

const Container: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
	return (
	  <div className="accueil-container">
		  <Navigation activeTab={activeTab} onTabChange={onTabChange}/>
        <div className="text-mainpage" style={{ flex: '1', position: "absolute"}}>
          <h1>RESTAURANT</h1>
          <h1>GASTRONOMIQUE</h1>
          <h1>VEGETAL & LACUSTRE</h1>
          <h1>3* MICHELIN ANNECY</h1>
        </div>
	  </div>
	);
};

const UnLieu: React.FC = () => {

  const images = [
    img1_2,
    // img2_2,
    // img3_2,
  ]
  return (
    <>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <div className="text-panel" style={{ flex: '1', backgroundColor: '#051528' }}>
          <h1>UN LIEU</h1>
          <p>Univers singulier, identitaire et façonné par</p>
          <p>l’homme. Essences de bois brulé, pierre de Savoie</p>
          <p>et cristal taillé, la salle, apaisante et épurée, </p>
          <p>accueille l’authentique transparence réconfort</p>
        </div>
        <div style={{ flex: '0 0 50%', display: 'flex', width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Carousel images={images} />
        </div>
      </div>
    </>
  );
}

const UnMoment: React.FC = () => {

  const images = [
    img1_3,
  ]

  return (
    <>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <div style={{ flex: '0 0 50%', display: 'flex', width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Carousel images={images} />
        </div>
        <div className="text-panel" style={{ flex: '1', backgroundColor: '#1E0E02' }}>
          <h1>UN MOMENT</h1>
          <p>Par le prisme du culinaire, entre pudeur et force</p>
          <p>vitale, le monde du vivant s'exprime jusqu'à la</p>
          <p>quintessence. Sublimé, il livre son émotion ultime</p>
        </div>
      </div>
    </>
  );
};

const NousTrouver: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <div className="text-panel" style={{ flex: '1', backgroundColor: '#142C08' }}>
          <h1>NOUS TROUVER</h1>
          <p>Un lieu unique dans un écrin de nature.</p>
        </div>
        <div style={{ flex: '0 0 50%', display: 'flex', height: "50%", width: '90%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <img alt='img' loading='lazy' src={imgmap}/>
        </div>
      </div>
    </>
  );
}

const Accueil: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {

  return (
    <>
      <FirstPage activeTab={activeTab} onTabChange={onTabChange}/>
      <UnLieu />
      <UnMoment />
      <NousTrouver />
      <LogoContainer/>
      <FooterContainer/>
    </>
  );
};

export default Accueil;
