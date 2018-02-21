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
        return <Link key={label} className="nav-link text-secondary text-uppercase" to={to}>{label}</Link>
    })

    render() {
        // const { links } = this.props
        return (
            <nav className="navbar justify-content-end p-3">
                { this.renderLinks(links) }
            </nav>
        )
    }
}