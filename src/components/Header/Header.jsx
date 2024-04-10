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
import ShoppingCart from '../ShoopingCart/ShoppingCart';
import { Link } from 'react-router-dom';

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div
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
        </div>

        <Logo>
          <Link to="/">iGames</Link>
        </Logo>
        <Navigation>
          <Icon>
            <CgProfile size={23} fontWeight={'bold'} />
          </Icon>
          <Icon>
            <PiShoppingCartBold
              size={23}
              fontWeight={'bold'}
              onClick={() => setIsOpen(true)}
            />
            <ItemQuantity>0</ItemQuantity>
          </Icon>
          {isOpen && <ShoppingCart setIsOpen={setIsOpen} />}
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
