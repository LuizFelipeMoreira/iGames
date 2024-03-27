import styled from 'styled-components';

export const SlideItem = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 400px;
  }
`;
