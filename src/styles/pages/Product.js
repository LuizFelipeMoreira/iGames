import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const ContainerProduct = styled.div`
  max-width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  font-family: 'Poppins';
  padding-top: 60px;

  @media ${Theme.device.tablet} {
    padding: 10px;
  }

  @media ${Theme.device.mobile} {
    padding: 0 1rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;

  .SwiperThumbs {
    margin-top: 10px;
    margin-right: 5px;
  }

  @media ${Theme.device.desktop} {
    flex-direction: column;
  }
`;

export const WrapperSlide = styled.div`
  max-width: 800px;

  @media ${Theme.device.desktop} {
    max-width: 100%;
    margin: 0;
  }
`;

export const SlideImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: 5px;
`;

export const InformationGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: max-content;
  font-size: ${Theme.Sizes.medium};
  background: #252525;
  color: ${Theme.colors.white};
  padding: 20px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #0a0a0a;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }

  @media ${Theme.device.tablet} {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: ${Theme.colors.black};
  margin-top: 10px;

  @media ${Theme.device.tablet} {
    font-size: 2rem;
  }

  @media ${Theme.device.mobile} {
    font-size: 1.625rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;

  @media ${Theme.device.tablet} {
    font-size: 0.875rem;
  }

  @media ${Theme.device.mobile} {
    font-size: 0.75rem;
  }
`;

export const CardContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 0 auto;
`;

export const RelatedGameCard = styled.div`
  display: grid;
  max-width: 30%;
  color: ${Theme.colors.white};
  position: relative;
  cursor: pointer;

  &:hover::before {
    opacity: 1;
  }

  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity 0.7s ease;
  }

  img {
    display: block;
    width: 100%;
    min-height: 450px;
    border-radius: 5px;
    object-fit: cover;
    grid-area: 1 / -1;
  }

  @media ${Theme.device.mobile} {
    aspect-ratio: 1/1;
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: 1 / -1;
  place-self: center;
  z-index: 999;
`;

export const GameTitle = styled.h4`
  font-size: ${Theme.Sizes.xlarge};
  font-weight: 600;
  text-align: center;
`;

export const ButtonGameCard = styled.button`
  max-width: max-content;
  padding: 10px 25px;
  border: 2px solid ${Theme.colors.white};
  background: transparent;
  color: ${Theme.colors.white};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background: ${Theme.colors.white};
    color: ${Theme.colors.black};
  }
`;
