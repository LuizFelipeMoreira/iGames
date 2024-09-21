import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const FooterBackground = styled.footer`
  width: 100%;
  font-family: ${Theme.font};
  background: ${Theme.colors.black};
  color: ${Theme.colors.white};
  padding: 1rem;
  margin-top: 30px;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const NavIcons = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 5px;

  a {
    font-size: 1.25rem;
  }
`;
