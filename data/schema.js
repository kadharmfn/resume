import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import profile from './profile.json'
import { connectionFromArray, connectionArgs, globalIdField, connectionDefinitions } from 'graphql-relay'
import { EducationConnection } from './types/EducationType'
import { nodeField, nodeInterface } from './node'

const GraphQLAddress = new GraphQLObjectType({
    name: 'Address',
    fields: {
        street1: {  
            type: GraphQLString,
            resolve: obj => obj.street1
        },
        street2: {
            type: GraphQLString,
            resolve: obj => obj.street2
        },
        city: {
            type: GraphQLString,
            resolve: obj => obj.city
        },
        state: {
            type: GraphQLString,
            resolve: obj => obj.state
        },
        pinCode: {
            type: GraphQLInt,
            resolve: obj => obj.pinCode
        }
    }
})

const GraphQLProfessionalExp = new GraphQLObjectType({
    name: 'ProfessionalExp',
    fields: {
        title: {  
            type: GraphQLString,
            resolve: obj => obj.title
        },
        experiences: {
            type: new GraphQLList(GraphQLString),
            resolve: obj => obj.experiences
        }
    }
})

const GraphQLProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: {
        id: globalIdField('Project'),
        name: {
            type: GraphQLString,
            resolve: obj => obj.name
        },
        responsibilities: {
            type: new GraphQLList(GraphQLString),
            resolve: obj => obj.responsibilities
        },
        skillsAndTools: {
            type: GraphQLString,
            resolve: obj => obj.skillsAndTools
        },
    }
})

export const {
    connectionType: ProjectConnection,
    edgeType: PrjectEdge,
} = connectionDefinitions({
    name: 'ProjectType',
    nodeType: GraphQLProjectType,
    connectionFields: () => ({
        totalCount: {
          type: GraphQLInt,
          resolve: conn => conn.totalCount,
        },
      }),
  });

const GraphQLExperienceType = new GraphQLObjectType({
    name: 'Experience',
    fields: {
        id: globalIdField('Experience'),
        clientName: {  
            type: GraphQLString,
            resolve: obj => obj.clientName
        },
        clientAddress: {
            type: GraphQLString,
            resolve: obj => obj.clientAddress
        },
        duration: {
            type: GraphQLString,
            resolve: obj => obj.duration
        },
        role: {
            type: GraphQLString,
            resolve: obj => obj.role
        },
        projects: {
            type: ProjectConnection,
            args: connectionArgs, 
            resolve: (obj, args) =>{
                return connectionFromArray(obj.projects, args)
            },
        }
    },
    interfaces: [nodeInterface],
})

export const {
    connectionType: ExperienceConnection,
    edgeType: ExperienceEdge,
} = connectionDefinitions({
    name: 'ExperienceType',
    nodeType: GraphQLExperienceType,
    connectionFields: () => ({
        totalCount: {
          type: GraphQLInt,
          resolve: conn => conn.totalCount,
        },
      }),
  });

const GraphQLUser = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: globalIdField('User'),
        name: {
            type: GraphQLString,
            resolve: obj => obj.name
        },
        phone: {
            type: GraphQLString,
            resolve: obj => obj.phone
        },
        email: {
            type: GraphQLString,
            resolve: obj => obj.email
        },
        address: {
            type: GraphQLAddress,
            resolve: obj => obj.address
        },
        professionalExp: {
            type: GraphQLProfessionalExp,
            resolve: obj => obj.professionalExp
        },
        education: {
            type: EducationConnection,
            args: connectionArgs,
            resolve: (obj, args) =>{
                return connectionFromArray(obj.education, args)
            },
        },
        experience: {
            type: ExperienceConnection,
            args: connectionArgs, 
            resolve: (obj, args) =>{
                console.log('obj.experience.projects', args)
                return connectionFromArray(obj.experience, args)
            },
        }
    },
    interfaces: [nodeInterface],
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'World !!'
        },
        user: {
            type: GraphQLUser,
            resolve: () => {
                return profile
            }
        },
        node: nodeField,
    }
})

const graphQLSchema = new GraphQLSchema({
    query: Query
})

module.exports = graphQLSchema