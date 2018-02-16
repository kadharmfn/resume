import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProgressBar extends Component {
    state = {
        width: '0%'
    }

    componentWillReceiveProps() {
        // only to give the illusion of loading
        for (let i = 0 ; i< 4, i++; ) {
            setTimeout(this.setState({
                width: `${i*25}%`
            }), i*3000)
        }
    }

    render() {
        const { width } = this.state
        return (
            <div class="progress m-6">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    aria-valuenow="75" 
                    aria-valuemin="0" 
                    aria-valuemax="100" style={{ width }} />
            </div>
        )
    }
}   