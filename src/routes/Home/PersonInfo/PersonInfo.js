import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'

export default class PersonInfo extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        jobTitle: PropTypes.string
    }

    render() {
        const { name, jobTitle } = this.props
        return (
            <div className="text-center text-dark p-2 card">
                <div>
                    <i className="fa fa-user" style={{ fontSize: 120 }} />
                    <h6 className="text-uppercase">{name}</h6>
                </div>
                <h6 className="border-top pt-3 text-uppercase"><Icon name="briefcase pr-2" />{jobTitle}</h6>
            </div>
        )
    }
}