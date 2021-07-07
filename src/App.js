import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Pizza from './components/Pizza';
import Confirmation from './components/Confirmation';
import axios from 'axios';
import * as yup from 'yup'
import schema from './validation/formSchema'
import Home from './components/Home'
import Header from './components/Header'


const App = () => {
  const history = useHistory();
  const initialFormValues= {
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    pineapple: false,
    instructions: ''
  }
  const initalFormErrors = {
    name: "",
  }


  const [formValues, setFormValues] = useState(initialFormValues)
  const [pizzaOrders, setPizzaOrders] = useState([])
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [disabled, setDisabled] = useState(true)

  const updateForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({...formValues, [name]: value})
  }
  const postPizzaOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/pizzaOrders', newOrder)
      .then(res => {
        setPizzaOrders([...pizzaOrders, res.data])
        setFormValues(initialFormValues)
        history.push('/confirmation')
      })
      .catch(err => {
        console.log(err)
      })

  }

  const formSubmit = () => {
    const pizzaOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "sausage", "mushrooms", "pineapple"].filter(
        topping => formValues[topping]
      ),
      instructions: formValues.instructions
    }
    postPizzaOrder(pizzaOrder)

  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  console.log(pizzaOrders)

  let lastOrder = pizzaOrders[pizzaOrders.length - 1] ? pizzaOrders[pizzaOrders.length - 1] : {name: '', size: '', toppings: [], instructions: ''}

  return (
    <>
      <Header />
      <Switch>
      <Route path='/pizza'>
      <Pizza values={formValues} update={updateForm} submit={formSubmit} errors={formErrors} disabled={disabled}/>
      </Route>
      <Route path='/confirmation'>
        <Confirmation 
        name={lastOrder.name} 
        size={lastOrder.size} 
        toppings={lastOrder.toppings} 
        instructions={lastOrder.instructions}/>
      </Route>
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
    </>
  );
};
export default App;
