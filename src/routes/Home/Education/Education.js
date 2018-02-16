import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SectionHeader from '../SectionHeader'

export default class Education extends Component {
    static propTypes = {
        education: PropTypes.object
    }

    renderEducation = edges => _.map(edges, edge => {
        const { node } = edge
        const { collegeName, course, yearOfCompletion } = node
        return (
            <div className="row p-3">
                <div className="col-4 small">{yearOfCompletion}</div>
                <div className="col-8">
                    <h6 className="text-dark">{collegeName}</h6>
                    <h6 className="text-secondary small">{course}</h6>
                </div>
            </div>
        )
    })

    render() {
        const { education } = this.props
        const { edges } = education
        return (
            <section className="mt-4 card">
                <SectionHeader title="Education" iconName="graduation-cap" />
                {this.renderEducation(edges)}
            </section>
        )
    }
}