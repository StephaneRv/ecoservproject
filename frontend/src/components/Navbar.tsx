import logo from '../assets/logo.svg';

import React from 'react';
import styled from 'styled-components';

import './Navbar.css';

export interface NavbarProps {
	activeTab: string;
	onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
	return (
		<nav className='nav-container'>
			<ul className='first-text'>
				<li className="logo-link" style={{marginTop: "10px"}}>
					<img src={logo} alt="" className="logo" />
				</li>
				<NavLink active={activeTab === 'Accueil'} onClick={() => onTabChange('Accueil')}>
					Le Pavillon Gourmand
				</NavLink>
			</ul>
			<ul className='second-text'>
				<NavLink active={activeTab === 'UnLieu'} onClick={() => onTabChange('UnLieu')}>
					Un Lieu
				</NavLink>
				<NavLink active={activeTab === 'UnMoment'} onClick={() => onTabChange('UnMoment')}>
					Un Moment
				</NavLink>
				<NavLink active={activeTab === 'NousTrouver'} onClick={() => onTabChange('NousTrouver')}>
					Nous Trouver
				</NavLink>
			</ul>
		</nav>
	);
};

const NavLink = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  color: ${({ active }) => (active ? 'white' : 'gray')};
  text-decoration: none;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
`;