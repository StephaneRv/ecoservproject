import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UnMoment from './pages/UnMoment';
import UnLieu from './pages/UnLieu';
import NousTrouver from './pages/NousTrouver';
import Accueil from './pages/Accueil';

function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Accueil');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {activeTab === 'Accueil' && <Accueil activeTab={activeTab} onTabChange={handleTabChange}/>}
      {activeTab === 'UnMoment' && <UnMoment activeTab={activeTab} onTabChange={handleTabChange}/>}
      {activeTab === 'UnLieu' && <UnLieu activeTab={activeTab} onTabChange={handleTabChange}/>}
      {activeTab === 'NousTrouver' && <NousTrouver activeTab={activeTab} onTabChange={handleTabChange}/>}
    </div>
  );
}

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<div>L'URL que vous cherchez n'existe pas.</div>} />
        </Routes>
    </Router>
  );
}

export default App;
