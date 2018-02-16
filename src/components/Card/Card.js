import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
        className: PropTypes.string
    }

    render() {
        const { children, className } = this.props
        const classNames = `card ${className}`
        return (
            <div className={classNames}>
                {children}
            </div>
        )   
    }
}