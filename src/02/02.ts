type LocalCityType = {
    title: string
    country: string
}
type AddressType ={
    streetTitle: string
    city: LocalCityType
}
type TechType ={
    id: number
    title: string
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


const student: StudentType = {
    name: 'Serega',
    age: 38,
isActive: false,
    address: {
        streetTitle: 'Lenina',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'React',
        }
    ]
}

console.log(student.technologies[1].title)
