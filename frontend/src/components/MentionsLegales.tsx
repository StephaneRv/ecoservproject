import React from 'react';

const FooterContainer: React.FC = () => {
  const containerStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    height: '25vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    bottom: 0,
    width: '100%',
  };

  return (
    <div style={containerStyles}>
      <div>
        <p>Le Pavillon Gourmand</p>
      </div>
      <div>
        <p>Mentions Légales</p>
      </div>
    </div>
  );
};

export default FooterContainer;