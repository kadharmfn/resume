import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'

export default class SectionHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        iconName: PropTypes.string
    }

    render() {
        const { title, iconName } = this.props
        return (
            <h5 className="px-4 py-3 mb-0 text-center text-uppercase text-dark"><Icon className="mr-1 icon-md" name={iconName} /> {title}</h5>
        )
    }
}