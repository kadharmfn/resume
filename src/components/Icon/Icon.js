import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        const { name } = this.props
        const iconClass = `fa fa-${name}`
        return (
            <i className={iconClass} />
        )
    }
}