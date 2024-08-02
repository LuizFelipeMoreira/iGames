import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${Theme.colors.black};
  font-family: ${Theme.font};
  padding: 1rem 5rem;
  color: ${Theme.colors.white};
  position: relative;
  @media (max-width: 920px) {
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;

    .InputContainer {
      opacity: 0;
      pointer-events: none;
      position: absolute;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 2.25rem;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${Theme.colors.white};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const InputHeader = styled.input`
  padding: 0.5rem;
  font-size: ${Theme.Sizes.normal};
  color: ${Theme.colors.gray0};
  outline: none;
  background: none;
  border: none;
  font-family: ${Theme.font};

  &::placeholder {
    color: ${Theme.colors.gray1};
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 40px;

  @media (max-width: 920px) {
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Icon = styled.li`
  padding: 0.625rem;
  position: relative;
  cursor: pointer;
`;

export const ItemQuantity = styled.span`
  font-size: 0.5rem;
  background: ${Theme.colors.Purple};
  padding: 2px 5px;
  border-radius: 50%;
  border: 3px solid black;
  position: absolute;
  top: -0px;
  right: 0px;
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

  @media ${Theme.device.mobile} {
    font-size: 0.625rem;
  }
`;
