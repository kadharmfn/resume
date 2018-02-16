import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import SectionHeader from '../SectionHeader'
import Card from '../../../components/Card'

export default class QuickSummary extends Component {
    static propTypes = {
        quickSummary: PropTypes.string.isRequired
    }

    render() {
        const { quickSummary } = this.props
        return (
            <Card>
                <SectionHeader title="Summary" iconName="list-alt" />
                <p className="p-3 text-secondary font-weight-light">{quickSummary}</p>
            </Card>
        )
    }
}