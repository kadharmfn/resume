import faker from 'faker'

const profile = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    address: {
        street1: faker.address.streetAddress(),
        street2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        pinCode: faker.address.zipCode()
    },
    professionalExp: {
        title: "Summary",
        experiences: [
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph(),
            faker.lorem.paragraph()
         ]
    },
    education: [
        {
            id: faker.random.uuid(),
            collegeName: faker.lorem.sentence(),
            address: `${faker.address.city()} ${faker.address.country()}`,
            course: faker.lorem.word(),
            yearOfCompletion: 2005
        }, 
        {
            id: faker.random.uuid(),
            collegeName: faker.lorem.sentence(),
            address: `${faker.address.city()} ${faker.address.country()}`,
            course: faker.lorem.word(),
            yearOfCompletion: 2002
        }
    ],
    experience: [
        {
            id: faker.random.uuid(),
            clientName: faker.company.companyName(),
            clientAddress: `${faker.address.city()} ${faker.address.country()}`,
            duration: "April 2015 - Till date",
            role: faker.name.jobTitle(),
            projects: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    responsibilities: [
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph()
                    ],
                    skillsAndTools: `${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}`
                }
            ]
        },
        {
            id: faker.random.uuid(),
            clientName: faker.company.companyName(),
            clientAddress: `${faker.address.city()} ${faker.address.country()}`,
            duration: "April 2012 - March 2015",
            role: faker.name.jobTitle(),
            projects: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    responsibilities: [
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph()
                    ],
                    skillsAndTools: `${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}`
                }
            ]
        },
        {
            id: faker.random.uuid(),
            clientName: faker.company.companyName(),
            clientAddress: `${faker.address.city()} ${faker.address.country()}`,
            duration: "April 2008 - March 2012",
            role: faker.name.jobTitle(),
            projects: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    responsibilities: [
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph()
                    ],
                    skillsAndTools: `${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}`
                }
            ]
        },
        {
            id: faker.random.uuid(),
            clientName: faker.company.companyName(),
            clientAddress: `${faker.address.city()} ${faker.address.country()}`,
            duration: "April 2005 - March 2008",
            role: faker.name.jobTitle(),
            projects: [
                {
                    id: faker.random.uuid(),
                    name: faker.commerce.productName(),
                    responsibilities: [
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph(),
                        faker.lorem.paragraph()
                    ],
                    skillsAndTools: `${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}${faker.random.words()}`
                }
            ]
        },
    ]
}

export default profile