import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const Container = styled.main`
  width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  font-family: ${Theme.font};

  @media (max-width: 920px) {
    padding: 0;
  }

  @media (max-width: 768px) {
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 1rem;
  p {
    font-size: ${Theme.Sizes.normal};
    font-weight: 400;
    line-height: 1;
  }
`;
export const Tittle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: ${Theme.colors.black};

  &::after {
    content: '';
    display: inline-block;
    margin-left: 20px;
    width: 3px;
    height: 40px;
    background: #f0f0f0;
  }

  @media ${Theme.device.desktop} {
    font-size: 2.25rem;
  }

  @media ${Theme.device.tablet} {
    font-size: 1.625rem;
  }
`;

export const Content = styled.section`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  padding: 1rem;
`;
