import React from 'react';
import { FooterBackground, FooterInfo, NavIcons } from './styles';
import { Logo } from '../Header/styles';

import { FaGamepad } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <FooterBackground>
        <FooterInfo>
          <Logo>
            <FaGamepad />
            iGames
          </Logo>

          <p>Desenvolvido por Luiz Felipe Moreira</p>
          <a href="/">API: Rawg.io</a>

          <NavIcons>
            <a href="">
              <FaInstagram width={32} />
            </a>

            <a href="https://github.com/LuizFelipeMoreira">
              <FaGithub width={32} />
            </a>

            <a href="https://www.linkedin.com/in/luiz-felipe-moreira-3a4929259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedin width={32} />
            </a>
          </NavIcons>
        </FooterInfo>
      </FooterBackground>
    </footer>
  );
};
