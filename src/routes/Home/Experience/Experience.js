import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SectionHeader from '../SectionHeader'
import SectionRow from '../SectionRow'
import Card from '../../../components/Card'

export default class Experience extends Component {
    static propTypes = {
        experience: PropTypes.object
    }

    renderExperience = edges => _.map(edges, edge => {
        const { node } = edge
        const { clientName, clientAddress, duration, role } = node
        const props = {
            textPrimary: `${clientName}, ${clientAddress}`,
            textSecondary: role,
            textLeft: duration
        }
        return <SectionRow key={clientName} {...props}/>
    })

    render() {
        const { experience } = this.props
        const { edges } = experience
        return (
            <Card>
                <SectionHeader title="Experience" iconName="building" />
                {this.renderExperience(edges)}
            </Card>
        )
    }
}