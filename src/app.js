import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { graphql, QueryRenderer } from 'react-relay'
import { installRelayDevTools } from 'relay-devtools'
import environtment from './environtment'
import Layout from './components/Layout'

// Useful for debugging, but remember to remove for a production deploy.
// installRelayDevTools();

export default class App extends Component {
    render() {
        return (
            <QueryRenderer 
            environment={environtment}
            query={graphql`
            query appQuery {
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

ReactDOM.render(<App/>, document.getElementById('app'))