import React from "react";
import styled from "styled-components";
import Mdma from "../assets/mdma.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <PageBlock>
      <Header />
      <MainStatue></MainStatue>
      <SubscribeBlock>
        <SubscribeTitle>Subscribe to our news letter</SubscribeTitle>
        <SubscribeSub>
          New Products, Sales, & Promos. Directly to your inbox.
        </SubscribeSub>
        <EmailWrapper>
          <EmailInput placeholder="E-mail" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </EmailWrapper>
      </SubscribeBlock>
      <Footer />
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const MainStatue = styled.div`
  width: 100rem;
  height: 100rem;
  margin: 15% auto 17% auto;
  background-image: url(${Mdma});
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
  @media screen and (max-width: 485px) {
    display: flex;
    width: 90vw;
    height: 90vw;
    margin: 30% auto 35% auto;
  }
`;

const SubscribeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
  @media screen and (max-width: 485px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const SubscribeTitle = styled.div`
  font-size: 8rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 485px) {
    font-size: 6rem;
  }
`;

const SubscribeSub = styled.div`
  font-size: 3rem;
  margin-bottom: 30rem;
  @media screen and (max-width: 485px) {
    font-size: 2.2rem;
  }
`;

const EmailWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 485px) {
    width: 90%;
  }
`;

const EmailInput = styled.input`
  padding: 3rem 5rem;
  outline: none;
  border: none;
  width: 280px;
  background: #fafafa;
  @media screen and (max-width: 485px) {
    width: 60%;
  }
`;

const SubscribeButton = styled.div`
  padding: 3rem 5rem;
  font-size: 3rem;
  color: #fff;
  background: #1f2021;
  cursor: pointer;
`;

export default Home;
