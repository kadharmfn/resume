import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../components/Icon'
import SectionHeader from '../SectionHeader'
import Card from '../../../components/Card'

export default class SkillsAndTools extends Component {
    static propTypes = {
        skillsAndTools: PropTypes.array
    }

    render() {
        const { skillsAndTools } = this.props
        return (
            <Card>
                <SectionHeader title="Skills and Tools" iconName="cog" />
                <div className="p-2">
                {
                    _.map(skillsAndTools, item => <span class="m-1 p-1 badge badge-light">{item}</span>)
                }
                </div>
            </Card>
        )
    }
}