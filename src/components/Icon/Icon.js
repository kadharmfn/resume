import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
    }

    render() {
        const { name, className } = this.props
        const iconClass = `text-info fa fa-${name} ${className}`
        return (
            <span><i className={iconClass} /></span>
        )
    }
}