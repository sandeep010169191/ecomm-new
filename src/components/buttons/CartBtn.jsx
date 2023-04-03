import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import addItem from '../../redux/reducers/addItem'

const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)
    
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-1">
                <span className="fa fa-shopping-cart me-1"></span>Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn