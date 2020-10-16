import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
text-align:center;
`;

const StyledNav = styled.nav`
width: 10%;
display: flex;
justify-content: space-between;
align-items: center;

a{
    display: inline-block;
    text-decoration: none;
    color: black;
}

`;



export default function Header() {
    return (
        <StyledHeader>
        <h1>Lambda Eats</h1>
        <StyledNav>
            <Link to="/">Home</Link>
            <Link to="/pizza">Start An Order</Link>
        </StyledNav>
        </StyledHeader>
    )
}
