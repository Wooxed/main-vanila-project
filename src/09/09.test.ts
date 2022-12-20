import {users} from "../08/08";

function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string}
}

test("reference type test", () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {title: 'Minsk'}
    }

    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000
    expect(user.age).toBe(1000)
})

test("array reference test", () => {
    const users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

const admins = users

    admins.push({name: 'Bob', age: 10})
    expect(users[2]).toEqual({name: 'Bob', age: 10})
})
test("array test", () => {
    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    const admins = users

    admins.push({name: 'Bob', age: 10})
    expect(users[2]).toEqual({name: 'Bob', age: 10})
})

test('reference test', ()=> {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Bob',
        age: 32,
        address: address
    }

    user2.address.title = 'Baly'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Baly')
})

test('reference type array test', ()=> {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Bob',
        age: 32,
        address: address
    }

const users = [ user, user2, {name: 'Misha', age: 44, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Alex'

    expect(users[0].name).toBe('Alex')
    expect(user.name).toBe('Alex')
})

test('sort array test', ()=> {
    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})
