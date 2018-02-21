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
            <div className="row m-0 p-3 justify-center">
                <div className="col-5 small text-right">{textLeft}</div>
                <div className="col-7">
                    <h6 className="text-dark">{textPrimary}</h6>
                    <h6 className="text-dark font-weight-light">{textSecondary}</h6>
                </div>
            </div>
        )
    }
}