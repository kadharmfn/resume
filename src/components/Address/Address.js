import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createFragmentContainer, graphql } from 'react-relay'

class Address extends Component {
    static propTypes = {
        address: PropTypes.shape({
            street1: PropTypes.string,
            street2: PropTypes.string,
            city: PropTypes.string
        })
    }
    render() {
        console.log(this.props)
        const { address } = this.props
        return (
            <address className="small">
                {address.street1}<br />
                {address.street2}<br />
                {address.city}, {address.state} {address.pinCode}<br />
            </address>
        )
    }
}

export default createFragmentContainer(Address, {
    address: graphql`
    fragment Address_address on Address {
        street1
        street2
        city
        state
        pinCode
    }
  `
})