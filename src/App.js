import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {startUserLogout} from './actions/userAction'



function App(props){
    const handleLogout = () =>{
        props.dispatch(startUserLogout())

    }
    return(
        <BrowserRouter>
             <Switch>
                   <Route path="/" exact component={Home}/>
                    <Route path="/Home"  component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>           
                </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(App)