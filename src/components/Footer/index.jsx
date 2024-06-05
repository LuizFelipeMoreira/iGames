import React from 'react';
import { FooterBackground } from './styles';
import { FaGamepad } from 'react-icons/fa6';
import { Logo } from '../Header/styles';

export const Footer = () => {
  return (
    <footer>
      <FooterBackground>
        <Logo>
          <FaGamepad />
          iGames
        </Logo>

        <p>Desenvolvedor: Luiz Felipe Moreira</p>
        <a href="/">Api Rawg</a>
      </FooterBackground>
    </footer>
  );
};
