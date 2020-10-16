import React from 'react'

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
                <label>
                    Pepperoni:
                    <input
                    name='pepperoni'
                    type='checkbox'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Sausage:
                    <input
                    name='sausage'
                    type='checkbox'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Mushrooms:
                    <input
                    name='mushrooms'
                    type='checkbox'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Pineapple:
                    <input
                    name='pineapple'
                    type='checkbox'
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>
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
    
    )
}
