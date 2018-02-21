import profile from './profile'

export const getEducationById = id => {
    const { education } = profile
    console.log('getEducationById -->', education)
}

export const getExperienceById = id => {
    const { experience } = profile
    console.log('getExperienceById -->', experience)
}