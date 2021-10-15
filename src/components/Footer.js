import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return(
            <FooterBlock>
            © 2021, shroom
            </FooterBlock>
    )    
}

const FooterBlock = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    margin: 60rem auto 10rem auto;
    font-size: 3rem;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;
export default Footer;