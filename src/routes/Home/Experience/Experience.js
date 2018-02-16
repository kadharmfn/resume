import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SectionHeader from '../SectionHeader'

export default class Experience extends Component {
    static propTypes = {
        experience: PropTypes.object
    }

    renderExperience = edges => _.map(edges, edge => {
        const { node } = edge
        const { clientName, clientAddress, duration, role } = node
        return (
            <div className="row p-3">
                <div className="col-4 small">{duration}</div>
                <div className="col-8">
                    <h6 className="text-dark">{clientName}</h6>
                    <h6 className="text-secondary small">{role}</h6>
                </div>
            </div>
        )
    })

    render() {
        const { experience } = this.props
        const { edges } = experience
        return (
            <section className="card">
                <SectionHeader title="Experience" iconName="building" />
                {this.renderExperience(edges)}
            </section>
        )
    }
}