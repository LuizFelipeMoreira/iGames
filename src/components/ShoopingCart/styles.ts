import styled from 'styled-components';
import Theme from '../../themes/Theme';

export const ContainerBag = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  top: 0;
  left: 0;
  z-index: 2000;
`;

export const BagContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 400px;
  background: ${Theme.colors.white};
  color: ${Theme.colors.black};
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: 680px) {
    width: 80%;
  }
`;

export const BagHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background: #f7f7f7;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${Theme.colors.gray0};

  svg {
    cursor: pointer;
  }
`;

export const Tittle = styled.h2`
  font-size: ${Theme.Sizes.large};
  color: ${Theme.colors.gray1};
`;

export const BagProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  max-height: 660px;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BagItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #d5d5d5;

  img {
    display: block;
    max-width: 100%;
    // height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    font-size: ${Theme.Sizes.normal};
  }
`;

export const BagFooter = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  padding: 20px;
  margin-top: auto;
  border-top: 2px solid #f7f7f7;
  box-shadow: 0 -2px 4px #00000008, 0 -8px 16px #00000012;
`;

export const PriceCheckout = styled.p`
  color: ${Theme.colors.black};
  font-weight: 500;
`;

export const ButtonCheckout = styled.button`
  font-size: ${Theme.Sizes.normal};
  font-weight: bold;
  background: #252525;
  color: ${Theme.colors.white};
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #0a0a0a;
    color: ${Theme.colors.white};
  }
`;

export const MessageCheckout = styled.p`
  font-size: small;
`;
