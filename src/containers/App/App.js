import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from '../../components/Card'
import Navigation from '../../components/Navigation'
import Router from '../../components/Router'
import routes from '../../routes'

// Useful for debugging, but remember to remove for a production deploy.
// installRelayDevTools();

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Navigation />
                <Router routes={routes}/>
            </div>
        )
    }
}