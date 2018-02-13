import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { createFragmentContainer, graphql } from 'react-relay'
import ListItems from '../ListItems'
import SectionTitle from '../SectionTitle'

class Experience extends Component {
    static propTypes = {
        details: PropTypes.object
    }
    render() {
        const { details } = this.props
        console.log('experiences', details)
        const { experience } = details
        const { edges } = experience
        return (
            <section className="mt-4">
                <SectionTitle title="Experience" iconName="building" />
                <div className="list-group">
                {
                    _.map(edges, edge => {
                        const { node } = edge
                        const { projects } = node
                        const { edges:projectEdges } = projects
                        return   <a key={node.clientName} href="#" className="border-0 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1 text-info">{node.clientName}, {node.clientAddress}</h6>
                                    <h6 className="small">{node.duration}</h6>
                                    </div>
                                    <p className="mb-1 small">{node.role}</p>
                                    {
                                        _.map(projectEdges, projectEdge => {

                                            const { node:project } = projectEdge
                                            return (
                                                <div>
                                                    <p className="mb-1 small"><strong>Projects</strong>: <em>{project.name}</em></p>
                                                    <ListItems items={project.responsibilities}/>
                                                    <p className="mb-1 small"><strong>Skills & Tools</strong>: {project.skillsAndTools}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </a>
                    })
                }
                </div>
            </section>
        )
    }
}

export default createFragmentContainer(Experience, {
    details: graphql`
        fragment Experience_details on User {
            experience {
                edges {
                    node {
                        id
                        clientName
                        clientAddress
                        duration
                        role
                        projects {
                            edges {
                                node {
                                    name
                                    responsibilities
                                    skillsAndTools
                                }
                            }
                        }
                    }
                }
            }
        }
    `
})