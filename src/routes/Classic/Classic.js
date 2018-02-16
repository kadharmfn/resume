import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { graphql, QueryRenderer } from 'react-relay'
import environtment from '../../environtment'
import Layout from '../../components/Layout'

export default class Classic extends Component {
    render() {
        return (
            <QueryRenderer 
            environment={environtment}
            query={graphql`
            query ClassicQuery {
                 user {
                    ...Layout_user
                }
            }`}
            variables={{ showAddress: false }}
             render={({error, props}) => {
                if (error) {
                    return <div>Error! {error.toString()}</div>;
                  }
                  if (!props) {
                    return <div>Loading...</div>;
                  }
                  return <Layout user={props.user}/>;
                }} />
        )
    }
}