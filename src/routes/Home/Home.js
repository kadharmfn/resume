import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { graphql, QueryRenderer } from 'react-relay'
import environtment from '../../environtment'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Experience from './Experience'
import Education from './Education'
import PersonInfo from './PersonInfo'
import Contact from './Contact'
import QuickSummary from './QuickSummary'

const homeQuery = graphql`query HomeQuery {
    user {
      name
      email
      phone
      jobTitle
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
    render() {
        return (
            <QueryRenderer 
            environment={environtment}
            query={homeQuery}
            variables={{ showAddress: false }}
             render={({error, props}) => {
                if (error) {
                    return <div>Error! {error.toString()}</div>;
                  }
                  if (!props) {
                    return <div>Loading...</div>;
                  }
                  const { user } = props
                  console.log('user from home query', user)
                  const { name, email, phone, experience, education, jobTitle } = user
                  return (
                      <div className="container">
                        <div class="row">
                                <div class="col-4 p-0">
                                    <PersonInfo name={name} jobTitle={jobTitle} />
                                    <QuickSummary quickSummary="Senior Full Stack developer with 10+ years of Web application developement experience." />
                                    <Contact email={email} phone={phone} />
                                </div>
                                <div class="col-8 pl-3 pr-0">
                                    <Experience experience={experience} />
                                    <Education education={education} />
                                </div>
                        </div>
                      </div>
                  )
                }} />
        )
    }
}