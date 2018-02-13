import { nodeDefinitions, fromGlobalId } from 'graphql-relay'
import Education from './modals/Education'
import Experience from './modals/Experience'
import EducationType from './types/EducationType'
import ExperienceType from './types/ExperienceType'
import { getEducationById, getUser, getExperienceById, getProjectById } from './db'

export const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
      console.log('globalId -->', globalId)
      const {type, id} = fromGlobalId(globalId);
      if (type === 'Education') {
        return getEducationById(id)
      } else if (type === 'Experience') {
        return getExperienceById(id)
      } else if (type === 'User') {
        return getUser(id);
      } else if (type === 'Project') {
        return getProjectById(id);
      }
      return null;
    },
    (obj) => {
      if (obj instanceof Education) {
        return EducationType;
      } else if (obj instanceof Experience) {
        return ExperienceType;
      } else if (obj instanceof User) {
        return GraphQLUser;
      } else if (obj instanceof Project) {
        return ExperienceType;
      }
      return null;
    }
  );