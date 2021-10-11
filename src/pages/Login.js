import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <PageBlock>
            <Header/>
            
            <Footer/>
        </PageBlock>
    )    
}

const PageBlock = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

export default Home;