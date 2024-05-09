import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  Icon,
  InputHeader,
  ItemQuantity,
  Logo,
  Navigation,
  PlataformItem,
  Plataforms,
} from './styles';
import { PiShoppingCartBold } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import ShoppingCart from '../ShoopingCart';
import { Link } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';

export const Header = ({ isOpen, setIsOpen }) => {
  const { productsBag } = useProduct();
  const plataforms = ['PC', 'Xbox', 'PlayStation', 'Nitendo', 'IOS', 'Android'];

  return (
    <>
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
              <ItemQuantity>{productsBag.length}</ItemQuantity>
            </Icon>
            {isOpen && <ShoppingCart setIsOpen={setIsOpen} />}
          </Navigation>
        </HeaderContent>
      </HeaderContainer>
      <div style={{ maxWidth: '100%', borderBottom: '1px solid #452CFF' }}>
        <Plataforms>
          {plataforms.map((item) => (
            <PlataformItem key={item}>{item}</PlataformItem>
          ))}
        </Plataforms>
      </div>
    </>
  );
};
