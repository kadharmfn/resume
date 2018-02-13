import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { createFragmentContainer, graphql } from 'react-relay'
import ListItems from '../ListItems'
import SectionTitle from '../SectionTitle'

class ProfessionalExp extends Component {
    static propTypes = {
        professionalExp: PropTypes.shape({
            title: PropTypes.string,
            experiences: PropTypes.array
        })
    }
    render() {
        const { professionalExp } = this.props
        const { title, experiences } = professionalExp
        return (
            <section className="mt-4">
                <SectionTitle title={title} iconName="list-alt"/>
                <ListItems items={experiences} />
            </section>
        )
    }
}

export default createFragmentContainer(ProfessionalExp, {
    professionalExp: graphql`
    fragment ProfessionalExp_professionalExp on ProfessionalExp {
        title
        experiences
    }
  `
})