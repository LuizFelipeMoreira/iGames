import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  Icon,
  InputHeader,
  ItemQuantity,
  Logo,
  Navigation,
} from './styles';
import { PiShoppingCartBold } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import Bag from '../ProductBag/ProductBag';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CiSearch size={26} fontWeight={'bold'} />
          <InputHeader
            type="text"
            name="porduct"
            id="product"
            placeholder="Procure por games . . ."
          />
        </div>
        <Logo>iGames</Logo>
        <Navigation>
          <Icon>
            <CgProfile size={26} fontWeight={'bold'} />
          </Icon>
          <Icon>
            <PiShoppingCartBold size={26} fontWeight={'bold'} />
            <ItemQuantity>0</ItemQuantity>
          </Icon>
        </Navigation>
      </HeaderContent>
      <Bag />
    </HeaderContainer>
  );
};

export default Header;
