import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import Card from '../../../components/Card'
import SectionHeader from '../SectionHeader'

export default class Contact extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        phone: PropTypes.string
    }

    render() {
        const { email, phone } = this.props
        return (
            <Card className="mt-4">
                <SectionHeader title="Contact" iconName="address-card"/>
                <div className="row p-3">
                    <div className="col-sm text-right">
                        <a className="card-text" href="mailto:#"> <Icon name="envelope" /> {email}</a><br/>
                    </div>
                    <div className="col-sm">
                        <a className="card-text" href={`tel:+${phone}`}><Icon name="phone" /> {phone}</a><br/>
                    </div>
                </div>
            </Card>
        )   
    }
}