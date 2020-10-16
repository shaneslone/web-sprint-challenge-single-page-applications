import React from 'react'
import styled from 'styled-components'
import pizza from '../Assets/Pizza.jpg'

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
font-size: 2rem;
padding: 2%;
border-radius: 20px;
a{
    color: black;
    text-decoration: none;
}
}

`;

export default function Confirmation(props) {
    const {name, size, toppings, instructions} = props
    return (
        <StyledDiv>
            <div>
            <h2>Your order is on the way!</h2>
                <p>Customer Name: {name}</p>
                <p>Size: {size}</p>
                <p>Toppings:</p>
                <ul>
                    {toppings.map(topping => {
                        return <li key={topping}>{topping}</li>
                    })}
                </ul>
                <p>Instructions: {instructions}</p>
            </div>
            
        </StyledDiv>
    )
}
