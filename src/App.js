import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Pizza from './components/Pizza';
import Confirmation from './components/Confirmation';
import axios from 'axios';
import * as yup from 'yup'
import schema from './validation/formSchema'
import Home from './components/Home'


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
    history.push('/confirmation')

  }

  console.log(pizzaOrders)


  return (
    <>
      <Switch>
      <Route path='/pizza'>
      <Pizza values={formValues} update={updateForm} submit={formSubmit} errors={formErrors}/>
      </Route>
      <Route path='/confirmation'>
        <Confirmation />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
    </>
  );
};
export default App;
