import React from 'react';
import styled from 'styled-components'
import Mdma from '../assets/mdma.png';
import Header from '../components/Header';

const Home = () => {
    return(
        <PageBlock>
        <Header></Header>
        <Space></Space>
        <MainStatue>

        </MainStatue>
        <Space></Space>

        </PageBlock>
    )    
}


const PageBlock = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 8rem auto;
`

const Space = styled.div`
    width: 100%;
    height: 100vh;
`;

const MainStatue = styled.div`
    width: 100rem;
    height: 100rem;
    margin: 0 auto;
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

export default Home;