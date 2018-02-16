import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'
import Header from '../Header'
import ProfessionalExp from '../ProfessionalExp'
import Education from '../Education'
import Experience from '../Experience'
import Navigation from '../Navigation'
import Router from '../Router'

class Layout extends Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.shape({
                street1: PropTypes.string,
                street2: PropTypes.string,
                city: PropTypes.string,
                state: PropTypes.string,
                pinCode: PropTypes.number
            })
        })
    }
    render() {
        const { user } = this.props
        return (
            <div className="container p-4 card">
                <Header user={user} showAddress={false}/>
                <ProfessionalExp professionalExp={user.professionalExp}/>
                <Experience details={user}/>
                <Education details={user}/>
            </div>
        )
    }
}

export default createFragmentContainer(Layout, {
    user: graphql`
    fragment Layout_user on User {
      ...Header_user
      professionalExp {
          ...ProfessionalExp_professionalExp
      }
      ...Education_details
      ...Experience_details
    }
  `, 
})