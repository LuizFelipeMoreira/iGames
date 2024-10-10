import styled from 'styled-components';
import Theme from '../../themes/Theme';

export const SlideItem = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;

  @media ${Theme.device.tablet} {
    height: 400px;
  }
`;
