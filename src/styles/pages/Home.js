import styled from 'styled-components';
import Theme from '../../Theme/Theme';

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
export const Plataforms = styled.ul`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin: 0 auto;
  list-style: none;
  gap: 80px;
  padding: 15px;
  font-family: ${Theme.font};
  text-align: center;

  @media (max-width: 920px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const PlataformItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${Theme.Sizes.large};
  cursor: pointer;
  gap: 5px;

  &:hover {
    color: ${Theme.colors.gray1};
  }

  &::before {
    content: '';
    width: 4px;
    height: 4px;

    background: ${Theme.colors.Purple};
  }

  @media (max-width: 920px) {
    font-size: ${Theme.Sizes.normal};
  }

  @media (max-width: 768px) {
    font-size: ${Theme.Sizes.small};
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

  @media (max-width: 920px) {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Content = styled.section`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  padding: 1rem;
`;
