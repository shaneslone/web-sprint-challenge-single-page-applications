import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../Assets/Pizza.jpg'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${pizza});
background-repeat: no-repeat;
background-size: 100%;
height: 90vh;

div {
    background-color: white;
    font-size: 3rem;
    padding: 2%;
    border-radius: 20px;
    a{
        color: black;
        text-decoration: none;
    }
}

`;

export default function Home() {
    return (
        <StyledDiv>
        <div><Link to='/pizza'>Click Here To Start An Order</Link></div>
        </StyledDiv>
    )
}
