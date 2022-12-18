import {ManType} from "./Destructuring";


let props: ManType;
beforeEach(()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Lenina street'
            }
        }
    }
})
test('test', () => {


    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons, name} = props

    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(name.length).toBe(6)
    expect(title).toBe('Lenina street')
})

test('test2 ', ()=> {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
})