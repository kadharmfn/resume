import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import SectionHeader from '../SectionHeader'

export default class Contact extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        phone: PropTypes.string
    }

    render() {
        const { email, phone } = this.props
        return (
            <div className="card mt-4">
                <SectionHeader title="Contact" iconName="address-card"/>
                <div className="p-3">
                    <a className="small text-secondary" href="mailto:#"> <Icon name="envelope" /> {email}</a><br/>
                    <a className="small text-secondary" href={`tel:+${phone}`}><Icon name="phone" /> {phone}</a><br/>
                </div>
            </div>
        )   
    }
}