import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import links from './links'
import Icon from '../Icon'

export default class Navigation extends Component {

    static propTypes = {
        links: PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
        }))
    }

    renderLinks = links => _.map(links , link => {
        const { to, label } = link
        return <Link className="nav-link p-3 text-white" to={to}>{label}</Link>
    })

    render() {
        // const { links } = this.props
        return (
            <nav className="nav mb-4 bg-dark">
                <Link className="nav-link p-3 text-white" to={'/'}><Icon className="logo" name="connectdevelop" /> Resume</Link>
                { this.renderLinks(links) }
            </nav>
        )
    }
}