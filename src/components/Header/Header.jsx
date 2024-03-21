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

const Header = ({ setOpenBag, openBag }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* <div
          className="InputContainer"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <CiSearch size={26} fontWeight={'bold'} />
          <InputHeader
            type="text"
            name="porduct"
            id="product"
            placeholder="Procure por games . . ."
          />
        </div> */}
        <Logo>iGames</Logo>
        <Navigation>
          <Icon>
            <CgProfile size={23} fontWeight={'bold'} />
          </Icon>
          <Icon>
            <PiShoppingCartBold
              size={23}
              fontWeight={'bold'}
              onClick={() => setOpenBag(true)}
            />
            <ItemQuantity>0</ItemQuantity>
          </Icon>
          {openBag && <Bag setOpenBag={setOpenBag} />}
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
