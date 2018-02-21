import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from '../../components/Card'
import Icon from '../../components/Icon'
import Navigation from '../../components/Navigation'
import Router from '../../components/Router'
import routes from '../../routes'

// Useful for debugging, but remember to remove for a production deploy.
// installRelayDevTools();

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="header row">
                    <div className="col-3 p-3 d-flex justify-content-center"><h4 className="font-weight-light text-info text-uppercase"> <Icon className="pr-2" name="paper-plane"/> Resume</h4></div>
                    <div className="col-9">
                        <Navigation />
                    </div>
                </div>
                <Router routes={routes}/>
            </div>
        )
    }
}