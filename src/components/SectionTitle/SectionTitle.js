import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

export default class SectionTitle extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        iconName: PropTypes.string
    }

    render() {
        const { title, iconName } = this.props
        return (
            <h6 className="text-dark text-uppercase border-bottom pb-2"><Icon name={iconName} /> {title}</h6>
        )
    }
}