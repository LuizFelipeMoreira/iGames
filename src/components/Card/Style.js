import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const Card = styled.div`
  border: 1px solid ${Theme.colors.Purple};
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;

export const CardImage = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  border-radius: 5px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: start;
  gap: 10px;
  padding: 10px;
`;

export const CardTittle = styled.h3``;

export const CardButton = styled.button`
  font-size: ${Theme.Sizes.normal};
  font-weight: bold;
  background: #252525;
  color: ${Theme.colors.white};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #0a0a0a;
    color: ${Theme.colors.white};
  }
`;

export const Rating = styled.p`
  font-size: ${Theme.Sizes.small};
  font-weight: bold;
  color: #22543d;
  background: #c6f6d5;
  padding: 5px;
  max-width: max-content;
  border-radius: 5px;
`;
