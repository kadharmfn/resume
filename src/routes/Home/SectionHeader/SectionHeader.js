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
            <h6 className="p-2 pl-4 border-bottom text-dark"><Icon className="mr-2" name={iconName} /> {title}</h6>
        )
    }
}