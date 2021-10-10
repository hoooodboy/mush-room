import React from 'react';
import styled from 'styled-components'
import Mdma from '../assets/mdma.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <PageBlock>
            <Header/>
            <ShopNav>
                <NavContent></NavContent>
                <NavContent></NavContent>
                <NavContent></NavContent>
                <NavContent></NavContent>
                <NavContent></NavContent>
                <NavContent></NavContent>
            </ShopNav>
            <Footer/>
        </PageBlock>
    )    
}


const PageBlock = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

const ShopNav = styled.div`
    margin: 40rem auto 20rem auto;
    
`;

const NavContent = styled.div``;

export default Home;