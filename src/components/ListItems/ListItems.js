import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class ListItems extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }
    render() {
        const { items } = this.props
        return (
            <ul> 
            {
                _.map(items, item => 
                    <li className="small" key={item}> {item} </li>
                )
            }
            </ul>
        )
    }
}