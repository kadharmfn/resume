import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Route } from 'react-router-dom'

export default class Router extends Component {
    render() {
        const { routes } = this.props
        return _.map(routes , route => {
            const { component, ...rest } = route
            return <Route component={component} {...rest} />
        })
    }
}