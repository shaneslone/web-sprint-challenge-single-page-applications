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

export default function PizzaOrder(props) {
    const { values, update, submit, errors, disabled} = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }




    return (
        <StyledDiv>
        <div>
        <form onSubmit={onSubmit}>
            <div>
                {errors.name}
            </div>
            <div>
                <label>
                    Customer Name:
                    <input 
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Pizza Size: 
                    <select
                    name="size"
                    value={values.size}
                    onChange={onChange}
                    >
                    <option value=''>---Select A Size---</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>    
                    </select>
                </label>
            </div>
            <div>
                <p>Toppings: </p>
                <ul>
                    <li>
                <label>
                    Pepperoni:
                    <input
                    name='pepperoni'
                    type='checkbox'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                </li>
                <li>
                <label>
                    Sausage:
                    <input
                    name='sausage'
                    type='checkbox'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>
                </li>
                <li>
                <label>
                    Mushrooms:
                    <input
                    name='mushrooms'
                    type='checkbox'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>
                </li>
                <li>
                <label>
                    Pineapple:
                    <input
                    name='pineapple'
                    type='checkbox'
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>
                </li>
                </ul>
            </div>
            <div>
                <label>
                    Special Instruction:
                    <input
                    name='instructions'
                    type='text'
                    value={values.instructions}
                    onChange={onChange}
                    />
                </label>
            </div>
            <button id="submit" disabled={disabled}>Submit Order</button>
        </form>
        </div>
    </StyledDiv>
    )
}
