import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${Theme.colors.black};
  font-family: ${Theme.font};
  padding: 1rem 5rem;
  color: ${Theme.colors.white};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  text-decoration: none;
  font-size: 2.25rem;
  font-weight: bold;
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
