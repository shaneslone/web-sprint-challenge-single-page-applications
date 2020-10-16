import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <Link to='/pizza'>Click Here to Start Order</Link>
        </div>
    )
}
