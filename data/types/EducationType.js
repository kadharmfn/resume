import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { globalIdField, connectionDefinitions } from 'graphql-relay'
import { nodeInterface } from '../node'

export const GraphQLEducationType = new GraphQLObjectType({
    name: 'Education',
    fields: {
      id: globalIdField('Education'),
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
    connectionType: EducationConnection,
    edgeType: EducationEdge,
} = connectionDefinitions({
    name: 'EducationType',
    nodeType: GraphQLEducationType,
    connectionFields: () => ({
        totalCount: {
          type: GraphQLInt,
          resolve: conn => conn.totalCount,
        },
      }),
  });