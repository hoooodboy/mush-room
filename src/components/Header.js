import React, { useState, useMemo } from "react";
import styled, { css, keyframes } from "styled-components";
import Cancle from "../assets/close.png";
import { Link } from "react-router-dom";
import LogoImg from "../assets/smlie.gif";
import Profileimg from "../assets/user.png";
import CartImg from "../assets/shopping-cart.png";
import EmptyCartImg from "../assets/emptycart.png";
import MenuImg from "../assets/menu.png";
import useOrders from "../hooks/useOrders";
import useProducts from "../hooks/useProducts";
import useActions from "../hooks/useActions";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const onToggle = () => {
    setOpen(!open);
    setClose(!close);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClose, setMenuClose] = useState(true);

  const MenuToggle = () => {
    setMenuOpen(!menuOpen);
    setMenuClose(!menuClose);
  };

  const orders = useOrders();
  const products = useProducts();
  const { remove, removeAll } = useActions();

  const subtotal = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const product = products.find((p) => p.id === id);
        return product.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, products]);

  const subtotalComma = subtotal.toLocaleString();
  return (
    <>
      <HeaderBlock>
        <MenuIcon onClick={MenuToggle} />
        <Link to="/">
          <Logo />
        </Link>
        <NavWrapper>
          <NavBar>
            <Link to="/shop" style={{ textDecoration: "none", color: "#000" }}>
              <Shop>Shop</Shop>
            </Link>
            <Link
              to="/lookbook"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <LookBook>Lookbook</LookBook>
            </Link>
            <Link
              to="/stock-list"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <StockList>Stocklist</StockList>
            </Link>
            <Trip>
              <a
                href="http://iacopoapps.appspot.com/hopalongwebgl/"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Trip
              </a>
            </Trip>
          </NavBar>
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            <Profile />
          </Link>
          <Cart onClick={onToggle} />
        </NavWrapper>
      </HeaderBlock>
      <Wrapper>
        <CartWrapper close={close} open={open}>
          <CancleWrapper>
            <CancleTitle>Cart</CancleTitle>
            <CancleButton onClick={onToggle} />
          </CancleWrapper>
          {orders.length === 0 ? (
            <>
              <EmptyCart />
              Cart is empty
            </>
          ) : (
            <Items>
              <Item>
                {orders.map((order) => {
                  const { id } = order;
                  const product = products.find((p) => p.id === id);
                  const totalPrice = product.price * order.quantity;
                  const totalPricecomma = totalPrice.toLocaleString();
                  console.log(totalPricecomma);
                  const click = () => {
                    remove(id);
                  };
                  return (
                    <ProductWrapper>
                      <Thumbnail src={product.thumbnail} />
                      <PriceWrapper>
                        <PriceInfo>
                          <p className="title">
                            {product.name} x {order.quantity}
                          </p>

                          <div className="action">₩ {totalPricecomma}</div>
                        </PriceInfo>
                        <DelButton onClick={click}>x</DelButton>
                      </PriceWrapper>
                    </ProductWrapper>
                  );
                })}
              </Item>

              <SubtotalWrapper>
                <div>Total</div>
                <div>₩ {subtotalComma}</div>
              </SubtotalWrapper>
              <Checkout>Checkout</Checkout>
            </Items>
          )}
        </CartWrapper>
        <CartOpacity onClick={onToggle} open={open} />
      </Wrapper>
      <MenuWrapper>
        <MenuBlockWrapper menuClose={menuClose} menuOpen={menuOpen}>
          <CancleWrapper>
            <CancleTitle>menu</CancleTitle>
            <CancleButton onClick={MenuToggle} />
          </CancleWrapper>
          <MenuContentWrapper>
            <Link to="/shop" style={{ textDecoration: "none", color: "#000" }}>
              <MenuNav>Shop</MenuNav>
            </Link>
            <Link
              to="/lookbook"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuNav>Lookbook</MenuNav>
            </Link>
            <Link
              to="/stock-list"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuNav>Stocklist</MenuNav>
            </Link>
            <MenuNav>
              <a
                href="http://iacopoapps.appspot.com/hopalongwebgl/"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Trip
              </a>
            </MenuNav>
          </MenuContentWrapper>
          <UserWrapper>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#868785" }}
            >
              <UserNav>Login</UserNav>
            </Link>
            <Link
              to="/create-account"
              style={{ textDecoration: "none", color: "#868785" }}
            >
              <UserNav>Create Account</UserNav>
            </Link>
            <UserNav>Terms of Service</UserNav>
            <UserNav>Refund policy</UserNav>
          </UserWrapper>
        </MenuBlockWrapper>
        <MenuOpacity onClick={MenuToggle} menuOpen={menuOpen} />
      </MenuWrapper>
    </>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 8rem;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    padding: 0 5%;
  }
`;

const Logo = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-image: url(${LogoImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Shop = styled.div`
  padding: 0 5rem;
  &:hover {
    color: #3d3d3d;
    cursor: pointer;
  }
`;

const LookBook = styled(Shop)``;

const StockList = styled(Shop)``;

const Trip = styled(Shop)``;

const Profile = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 5rem;
  background-image: url(${Profileimg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Cart = styled(Profile)`
  margin: 0;
  background-image: url(${CartImg});
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0px;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0px;
`;

const CartWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s cubic-bezier(0, 0.72, 0.19, 0.99);
  ${(props) =>
    props.close &&
    css`
      transform: translateX(420px);
    `}
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0px);
    `}
    color: #868785;
`;

const MenuBlockWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s cubic-bezier(0, 0.72, 0.19, 0.99);
  ${(props) =>
    props.menuClose &&
    css`
      transform: translateX(-420px);
    `}
  ${(props) =>
    props.menuOpen &&
    css`
      transform: translateX(0px);
    `}
    color: #868785;
`;

const CartOpacity = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.1;
  z-index: 2;
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: flex;
    `}
`;

const MenuOpacity = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.1;
  z-index: 2;
  display: none;
  ${(props) =>
    props.menuOpen &&
    css`
      display: flex;
    `}
`;

const CancleButton = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${Cancle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;

const CancleWrapper = styled.div`
  display: flex;
  padding: 7% 5%;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  color: #000;
`;

const CancleTitle = styled.div`
  font-size: 5rem;
  font-weight: 600;
`;

const EmptyCart = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${EmptyCartImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 40%;
`;

const MenuIcon = styled(Profile)`
  margin: 0;
  display: none;
  background-image: url(${MenuImg});
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const MenuContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const MenuNav = styled.div`
  color: #000;
  font-size: 6rem;
  padding: 7% 5% 5% 5%;
  width: 90%;
  border-bottom: 1px solid #ebebeb;
  &:hover {
    color: #3d3d3d;
    cursor: pointer;
  }
`;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

const UserNav = styled.div`
  padding: 3% 5%;
`;

const Items = styled.div`
  width: 80%;
`;

const Item = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #ebebeb;
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInfo = styled.div``;

const DelButton = styled.div`
  cursor: pointer;
  margin: 0 5px 0 20px;
  &:hover {
    color: #f07f7f;
  }
`;

const SubtotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 30px 0;
  font-weight: 400;
  color: #000;
`;
const TotalPriceWrapper = styled.div`
  display: flex;
`;

const Checkout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
`;
export default Header;
