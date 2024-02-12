import React from 'react';
import logo_relais from '../assets/images/logos/relaischateaux.webp';
import logo_michelin from '../assets/images/logos/michelin.webp';
import logo_gault from '../assets/images/logos/gaultmillau.webp';
import logo_ecotable from '../assets/images/logos/ecotable.webp';

const LogoContainer: React.FC = () => {
  const logoStyles = {
    width: '90px',
    height: 'auto',
    marginLeft: '75px',
    marginTop: '15px',
    marginBottom: '15px',
};

const containerStyles = {
    display: 'flex',
    height: '25vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    width: '100%',

};

  return (
    <div style={containerStyles}>
      <img loading='lazy' src={logo_relais} alt="Logo Relais Chateaux" style={logoStyles} />
      <img loading='lazy' src={logo_michelin} alt="Logo Michelin 2023" style={logoStyles} />
      <img loading='lazy' src={logo_gault} alt="Logo Gault&Millau" style={logoStyles} />
      <img loading='lazy' src={logo_ecotable} alt="Logo ecotable" style={logoStyles} />
    </div>
  );
};

export default LogoContainer;