import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { graphql, QueryRenderer } from 'react-relay'
import environtment from '../../environtment'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import ProgressBar from '../../components/ProgressBar'
import Experience from './Experience'
import Education from './Education'
import PersonInfo from './PersonInfo'
import Contact from './Contact'
import QuickSummary from './QuickSummary'
import SkillsAndTools from './SkillsAndTools'

const homeQuery = graphql`query HomeQuery {
    user {
      name
      email
      phone
      jobTitle
      professionalExp {
        experiences
      }
      experience {
        edges {
          node {
            clientName
            clientAddress
            duration
            role
            projects {
              edges {
                node {
                  name
                  skillsAndTools
                }
              }
            }
          }
        }
      }
      
      education {
        edges {
          node {
            collegeName
            course
            yearOfCompletion
          }
        }
      }
    }
  }`

export default class Home extends Component {

    skillsAndTools = experience => {
        const { edges } = experience
        let skillList = []
        const projectMap = _.map(edges, edge => {
          const { node } = edge
          const { projects } = node
          _.each(projects.edges, projectEdge => {
            const skillTokens = _.split(projectEdge.node.skillsAndTools, ",")
            skillList = [...skillList, ...skillTokens]
          })
        })
        return _.uniq(skillList)
    }

    render() {
        return (
            <QueryRenderer 
            environment={environtment}
            query={homeQuery}
            variables={{ showAddress: false }}
             render={({error, props}) => {
                if (error) {
                    return <div>Error! {error.toString()}</div>
                  }
                  if (!props) {
                    return <ProgressBar />
                  }
                  const { user } = props
                  const { name, email, phone, experience, education, jobTitle, professionalExp } = user
                  const skillsAndTools = this.skillsAndTools(experience)
                  const { experiences } = professionalExp
                  return (
                      <div>
                      <div className="bg-row row">
                            <div className="col-12 px-0">
                                <PersonInfo name={name} jobTitle={jobTitle} quickSummary={_.slice(experiences, 0, 3)}/>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-12 pr-4 section-box">
                                <Experience experience={experience} />
                            </div>
                        </div>
                        <div className="row p-5 bg-row-secondary">
                            <div className="col-12 px-2 section-box">
                                <Education education={education} />
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-12 px-2 section-box">
                                <Contact email={email} phone={phone} />
                            </div>
                        </div>
                        <div className="row p-5 bg-row-secondary">
                            <div className="col-12 px-0 section-box">
                                <SkillsAndTools skillsAndTools={skillsAndTools}/>
                            </div>
                        </div>
                      </div>
                  )
                }} />
        )
    }
}