import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <PageBlock>
      <Header />
      <LoginBlock>
        <LoginBlockTitle>CreateAccount</LoginBlockTitle>
        <Email placeholder="First Name"></Email>
        <PWD placeholder="Last Name"></PWD>
        <PWD placeholder="E-mail"></PWD>
        <PWD placeholder="Password"></PWD>
        <SignIn>Create</SignIn>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <Option>Return to Store</Option>
        </Link>
      </LoginBlock>
      <Footer />
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  min-width: 300px;
  @media screen and (max-width: 485px) {
    width: 80%;
  }
  text-align: center;
`;

const LoginBlockTitle = styled.div`
  font-size: 6rem;
  margin-bottom: 30rem;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Email = styled.input`
  font-size: 5rem;
  padding: 2rem 3rem;
  width: calc(100% - 6rem);
  border: none;
  background: #fafafa;
  outline: none;
`;

const PWD = styled(Email)`
  margin-top: 3rem;
`;

const SignIn = styled.div`
  margin-top: 7rem;
  padding: 3rem 3rem;
  width: calc(100% - 6rem);
  background: #000;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  &:active {
    transform: scale(0.97);
  }
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Option = styled.div`
  margin-top: 5rem;
  font-size: 3rem;
  cursor: pointer;
`;

export default Home;
