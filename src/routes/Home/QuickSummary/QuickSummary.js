import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import SectionHeader from '../SectionHeader'

export default class QuickSummary extends Component {
    static propTypes = {
        quickSummary: PropTypes.string.isRequired
    }

    render() {
        const { quickSummary } = this.props
        return (
            <div className="card mt-4">
                <SectionHeader title="Summary" iconName="list-alt" />
                <p className="p-3 text-secondary">{quickSummary}</p>
            </div>
        )
    }
}