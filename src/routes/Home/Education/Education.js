import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SectionHeader from '../SectionHeader'
import SectionRow from '../SectionRow'
import Card from '../../../components/Card'

export default class Education extends Component {
    static propTypes = {
        education: PropTypes.object
    }

    renderEducation = edges => _.map(edges, edge => {
        const { node } = edge
        const { collegeName, course, yearOfCompletion } = node
        const props = {
            textPrimary: collegeName,
            textSecondary: course,
            textLeft: yearOfCompletion
        }
        return <SectionRow key={collegeName} {...props}/>
    })

    render() {
        const { education } = this.props
        const { edges } = education
        return (
            <Card>
                <SectionHeader title="Education" iconName="graduation-cap" />
                {this.renderEducation(edges)}
            </Card>
        )
    }
}