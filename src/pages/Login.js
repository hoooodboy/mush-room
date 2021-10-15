import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <PageBlock>
            <Header/>
                <LoginBlock>
                    <LoginBlockTitle>Login</LoginBlockTitle>
                    <Email placeholder="E-mail"></Email>
                    <PWD placeholder="Password"></PWD>
                    <SignIn>Sign In</SignIn>
                    <Option>Create Account</Option>
                    <Option>Return to Store</Option>
                    <Option>Forgot your password?</Option>
                </LoginBlock>
            <Footer/>
        </PageBlock>
    )    
}

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
    margin-top: 5rem;
    padding: 3rem 3rem;
    width: calc(100% - 6rem);
    background: #000;
    color: #fff;
    text-align: center;
    cursor: pointer;
`;

const Option = styled.div`
    margin-top: 5rem;
    font-size: 3rem;
    cursor: pointer;
`;

export default Home;