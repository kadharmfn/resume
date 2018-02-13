import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'
import Address from '../Address'
import Icon from '../Icon'

class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string
        }),
        showAddress: PropTypes.bool,
    }
    render() {
        const { user, showAddress } = this.props
        return (
            <header> 
                <h5 className="text-dark mb-0">{user.name}</h5>
                <a className="small" href="mailto:#"> <Icon name="envelope" /> {user.email}</a><br/>
                <a className="small" href="tel:+4049217978"><Icon name="phone" /> {user.phone}</a><br/>
                { showAddress && <Address address={user.address}/> }
            </header>
        )
    }
}

export default createFragmentContainer(Header, {
    user: graphql`
    fragment Header_user on User{
      name
      email
      phone
      address  {
          ...Address_address
      }
    }
  `
})