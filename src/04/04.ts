const ages = [18, 33, 22, 65, 101, 1, 54]

const predicate = (age: number) => {
    return age < 90
}


const aldAges = [100]

type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}
const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]