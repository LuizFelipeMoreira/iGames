import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const ContainerBag = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  top: 0;
  left: 0;
  z-index: 2000;
`;

export const BagContent = styled.div`
  background: ${Theme.colors.white};
  color: ${Theme.colors.black};
  justify-content: end;
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100vh;
  width: 25%;
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
  font-size: ${Theme.Sizes.normal};
  font-weight: 500;
`;

export const BagFooter = styled.div`
  display: flex;
  width: 100%;
`;
