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
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardTittle = styled.h3``;

export const CardButton = styled.button`
  padding: 10px 15px;
  font-size: ${Theme.Sizes.normal};
  font-weight: bold;
  background: none;
  color: ${Theme.colors.white};
  background: #252525;
  border: 1px solid #0a0a0a;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

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
