import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from '../components/Landing Page/Landing'
import About from '../components/About/About'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register/Register'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Favorites from '../components/Favorites/Favorites'
import Dashboard from '../components/Store/Dashboard/Dashboard'
import Categories from '../components/Store/Categories/Categories'
import Account from '../components/User/Account/Account'
import Settings from '../components/User/Account/Settings'


export default (
    <Switch>
        <Route component = {Landing} exact path = '/' />
        <Route component = {About} exact path = '/about' />
        <Route component = {Login} exact path = '/login' />
        <Route component = {Register} exact path = '/register' />
        <Route component = {ShoppingCart} exact path = '/cart' />
        <Route component = {Favorites} exact path = './saved'/>
        <Route component = {Dashboard} exact path = '/dashboard' />
        <Route component = {Categories} exact path = '/dashboard/:categories' />
        <Route component = {Account} exact path = '/account' />
        <Route component = {Settings} exact path = '/account/:settings' />
    </Switch>
)




    