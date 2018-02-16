import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SectionRow extends Component {
    static propTypes = {
        textPrimary: PropTypes.string,
        textSecondary: PropTypes.string,
        textLeft: PropTypes.string,
    }

    render() {
        const { textPrimary, textSecondary, textLeft   } = this.props
        return (
            <div className="row m-0 p-3">
                <div className="col-6 small text-center">{textLeft}</div>
                <div className="col-6 text-left">
                    <h6 className="text-dark">{textPrimary}</h6>
                    <h6 className="text-dark font-weight-light">{textSecondary}</h6>
                </div>
            </div>
        )
    }
}