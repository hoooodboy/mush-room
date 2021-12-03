import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useProducts from "../hooks/useProducts";
import useActions from "../hooks/useActions";

const ProductDetail = ({ location }) => {
  const products = useProducts();
  const { addToOrder } = useActions();

  const { id } = products;
  const click = () => {
    addToOrder(id);
    console.log(id);
  };
  return (
    <PageBlock>
      <Header />
      <ShopNav>
        <NavTitle>s</NavTitle>
      </ShopNav>
      {products.map((product) => {
        const { id } = product;
        const click = () => {
          addToOrder(id);
        };

        return product.id === location.props?.idx ? (
          <DetailWrappper>
            <MainPhoto src={product.thumbnail}></MainPhoto>

            <InfoWrapper>
              <ProductName>{product.name}</ProductName>
              <Price>₩ {product.price}</Price>
              <Description>Shipping calculated at checkout.</Description>
              <SizeWrapper>
                size
                <Size>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Size>
              </SizeWrapper>
              <ButtonWrapper>
                <AddCart onClick={click}>Add Cart</AddCart>
                <BuyNow>Buy Now</BuyNow>
              </ButtonWrapper>
            </InfoWrapper>
          </DetailWrappper>
        ) : null;
      })}

      <Footer />
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const ShopNav = styled.div`
  margin: 15rem auto 20rem auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 840px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const NavTitle = styled.div`
  padding: 5rem 10rem;
  font-size: 6rem;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  color: #fff;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const DetailWrappper = styled.div`
  margin: 15rem auto 20rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const MainPhoto = styled.img`
  width: 350px;
  height: 350px;
  @media screen and (max-width: 1024px) {
    width: 80vw;
    height: 80vw;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  @media screen and (max-width: 840px) {
    width: 80vw;
  }
`;

const ProductName = styled.div`
  font-size: 50px;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-top: 10vh;
  }
`;

const Price = styled.div`
  margin: 25px 0 20px 0;
  font-size: 24px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
`;

const SizeWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

const Size = styled.select`
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AddCart = styled.div`
  padding: 15px 35px;
  border: 1px solid #000;
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
`;
const BuyNow = styled(AddCart)`
  background: #000;
  color: #fff;
`;
export default ProductDetail;
