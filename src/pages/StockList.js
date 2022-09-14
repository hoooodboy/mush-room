import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StockList = () => {
  return (
    <PageBlock>
      <Header />
      <ShopNav>
        <NavContent>StockList</NavContent>
      </ShopNav>
      <ProductWrapper>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductWrapper>
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

const NavContent = styled.div`
  padding: 5rem 10rem;
  font-size: 6rem;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    color: #3d3d3d;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Product = styled.div`
  background: #999;
  width: 20vw;
  max-width: 300px;
  height: 20vw;
  max-height: 300px;
  margin-bottom: 3%;
  @media screen and (max-width: 485px) {
    width: 90vw;
    height: 90vw;
    margin: 5vh auto;
  }
`;

export default StockList;
