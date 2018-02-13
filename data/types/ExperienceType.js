import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { globalIdField, connectionDefinitions } from 'graphql-relay'
import { nodeInterface } from '../node'

export const GraphQLExperienceType = new GraphQLObjectType({
    name: 'Experience',
    fields: {
      id: globalIdField('Experience'),
      collegeName: {
        type: GraphQLString,
        resolve: (obj) => obj.collegeName,
      },
      address: {
        type: GraphQLString,
        resolve: (obj) => obj.address,
      },
      course: {
        type: GraphQLString,
        resolve: (obj) => obj.course,
      },
      yearOfCompletion: {
        type: GraphQLString,
        resolve: (obj) => obj.yearOfCompletion,
      }
    },
    interfaces: [nodeInterface],
  });


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