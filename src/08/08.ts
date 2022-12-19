export const usersObj = {
    '0': 'Dimych',
    '1': 'Irina',
    '2': 'Valera',
    '3': 'Anastasia'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '22': {id: 22, name: 'Irina'},
    '33': {id: 33, name: 'Valera'},
    '888': {id: 888, name: 'Anastasia'}
}

let user = {id: 100500, name: 'Igor'}

users[user.id] = user
delete users[user.id]
users[user.id].name = 'Misha'
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 22, name: 'Irina'},
    {id: 33, name: 'Valera'},
    {id: 888, name: 'Anastasia'}
]

// usersArray.find(u => u.id === 1);

// let  usersCopy = [...usersArray.filter(), user]

// let usersArray = usersArray.filter(u => u.id !== user.id)