import React from 'react';
import styled from 'styled-components'
import Mdma from '../assets/mdma.png';
import Header from '../components/Header';

const Home = () => {
    return(
        <PageBlock>
            <Header/>
            <MainStatue>

            </MainStatue>
            <SubscribeBlock>
                <SubscribeTitle>
                Subscribe to our newsletter

                </SubscribeTitle>
                <SubscribeSub>
                New Products, Sales, & Promos. Directly to your inbox.


                </SubscribeSub>
                <EmailWrapper>
                    <EmailInput placeholder="E-mail" />
                    <SubscribeButton>Subscribe</SubscribeButton>
                </EmailWrapper>
            </SubscribeBlock>
            <Footer>
            © 2021, shroom
            </Footer>
        </PageBlock>
    )    
}


const PageBlock = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

const MainStatue = styled.div`
    width: 100rem;
    height: 100rem;
    margin: 50rem auto;
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
`;

const SubscribeBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubscribeTitle = styled.div`
    font-size: 8rem;
    margin-bottom: 2rem;
`;

const SubscribeSub = styled.div`
    font-size: 3rem;
    margin-bottom: 30rem;
`;

const EmailWrapper = styled.div`
    display: flex;
`;

const EmailInput = styled.input`
    padding: 3rem 5rem;
    outline: none;
    border: none;
    width: 300px;
`;

const SubscribeButton = styled.div`
    padding: 3rem 5rem;
    font-size: 3rem;
    color: #fff;
    background: #1f2021;
`;

const Footer = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    margin: 60rem auto 10rem auto;
    font-size: 3rem;
`;
export default Home;