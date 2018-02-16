import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import Card from '../../../components/Card'

export default class PersonInfo extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        jobTitle: PropTypes.string,
        quickSummary: PropTypes.string
    }

    render() {
        const { name, jobTitle, quickSummary } = this.props
        return (
            <div className="text-center">
                <div className="p-4">
                    <Icon className="avatar" name="user" />
                    <h4 className="text-white">{name}</h4>
                    <h5 className="font-weight-light text-white"><Icon name="briefcase pr-2" />{jobTitle}</h5>
                    <h5 className="p-3 text-secondary font-weight-light">{quickSummary}</h5>
                </div>
            </div>
        )
    }
}