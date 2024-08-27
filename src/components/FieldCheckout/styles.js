import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  img {
    display: block;
    max-width: 60%;
    height: 40px;
  }

  input {
    padding: 5px;
    width: 100%;
    border: 1px solid #e0dfdf;
    padding: 10px;
    border-radius: 5px;
    //outline: none;
    font-size: ${Theme.Sizes.normal};
  }
`;
