import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const FooterBackground = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${Theme.font};
  background: ${Theme.colors.black};
  color: ${Theme.colors.white};
  padding: 1rem;
  text-align: center;

  h1 {
    margin: auto;
  }
`;

export const FooterInfo = styled.div``;
