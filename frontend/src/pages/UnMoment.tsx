import img1 from '../assets/images/moment/1.webp';
import img2 from '../assets/images/moment/2.webp';
import img3 from '../assets/images/moment/3.webp';
import img4 from '../assets/images/moment/4.webp';
import img_vin from '../assets/images/moment/vin.webp';
import vid from '../assets/images/moment/vid.webm';
import cave from '../assets/images/moment/cave.webp';
import './texts.css';
import {Navigation, NavbarProps} from '../components/Navbar';
import './UnMoment.css';
import LogoContainer from "../components/Logos";
import FooterContainer from "../components/MentionsLegales";

const UnMoment: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {

  return (
    <>
      <Container activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ display: 'grid', gridAutoRows: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div className="text-panel" style={{ flex: '1', backgroundColor: '#1E0E02' }}>
            <h1>ÂME VÉGÉTALE</h1>
            <h1>ET LACUSTRE</h1>
            <p>Reflet d'un garde-manger nourricier, la cuisine,</p>
            <p>brut et authentique dessine ses lignes dans ses</p>
            <p>courbes sauvages et charnelles sans contour</p>
            <div style={{ display:'inline-block', marginTop: '25px'}}>
              <a href="/menu.pdf" className="menu-button" download>Notre Menu</a>
            </div>
          </div>
          <div className="carousel" style={{ flex: '1', display: 'grid', position: 'relative', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            <div style={{ 
              background: `url(${img1}) no-repeat center center`, 
              backgroundSize: 'cover', 
              gridArea: '1 / 1 / 2 / 2' 
            }}/>
            <div style={{ 
              background: `url(${img2}) no-repeat center center`, 
              backgroundSize: 'cover', 
              gridArea: '1 / 2 / 2 / 3' 
            }}/>
            <div style={{ 
              background: `url(${img3}) no-repeat center center`, 
              backgroundSize: 'cover', 
              gridArea: '2 / 1 / 3 / 2' 
            }}/>
            <div style={{ 
              background: `url(${img4}) no-repeat center center`, 
              backgroundSize: 'cover', 
              gridArea: '2 / 2 / 3 / 3' 
            }}/>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div style={{ flex: '1', position: 'relative' }}>
            <video src={vid} style={{ position: 'absolute', top: '0', width: '100%', height: '100%', objectFit: 'cover' }} controls preload="none"/>
          </div>
          <div className="text-panel" style={{ flex: '1', backgroundColor: '#1E0E02' }}>
            <h1>LA CUEILLETTE</h1>
            <p>Inspiration quotidienne, dans son jus, le végétal</p>
            <p>s'exprime au gré du temps, dans ses moindres</p>
            <p>mouvements, discret ou profus, libre d'être soi.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <div className="text-panel" style={{ flex: '1', backgroundColor: '#1E0E02' }}>
            <h1>VERRE DU TERROIR</h1>
            <p>Explorer un territoire et rendre à la vigne la beauté</p>
            <p>des racines locales, les cépages d'ici, écho aux</p>
            <p>flacons d'ailleurs, la pertinence d'une équipe</p>
            <p>sommelière en totale cohérence</p>
            <div style={{ display:'inline-block', marginTop: '25px'}}>
              <a href="/vins.pdf" className="menu-button" download>La carte des vins</a>
            </div>
          </div>
            <div style={{
              flex: '1',
              background: `url(${cave}) no-repeat center center`, 
              backgroundSize: 'cover', 
            }}/>
          </div>
        <div style={{
            flex: '1',
            background: `url(${img_vin}) no-repeat center center`, 
            backgroundSize: 'cover', 
          }}/>
        </div>
      </div>
      <LogoContainer />
      <FooterContainer />
    </>
  );
};


const Container: React.FC<NavbarProps> = ({activeTab, onTabChange}) => {
	return (
	  <div className="unmoment-container">
		  <Navigation activeTab={activeTab} onTabChange={onTabChange}/>
	  </div>
	);
  };

export default UnMoment;
