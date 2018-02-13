import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { createFragmentContainer, graphql } from 'react-relay'
import SectionTitle from '../SectionTitle'

class Education extends Component {
    static propTypes = {
        details: PropTypes.object
    }
    render() {
        const { details } = this.props
        const { education } = details
        const { edges } = education
        return (
            <section className="mt-4">
                <SectionTitle title="Education" iconName="graduation-cap" />
                <div className="list-group">
                {
                    _.map(edges, edge => {
                        const { node } = edge
                        return   <a key={node.yearOfCompletion} href="#" className="border-0 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1 text-info">{node.collegeName}, {node.address}</h6>
                                    <h6 className="small">{node.yearOfCompletion}</h6>
                                    </div>
                                    <p className="mb-1">{node.course}</p>
                                </a>
                    })
                }
                </div>
            </section>
        )
    }
}

export default createFragmentContainer(Education, {
    details: graphql`
        fragment Education_details on User {
            education {
                edges {
                    node {
                        id
                        collegeName
                        yearOfCompletion
                        address
                        course
                    }
                }
            }
        }
    `
})