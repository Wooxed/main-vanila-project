type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '22': {id: 22, name: 'Irina'},
        '33': {id: 33, name: 'Valera'},
        '888': {id: 888, name: 'Anastasia'}
    }
})

test('should update corresponding user', ()=> {
    users['888'].name = 'Ekaterina'

    expect(users['888']).toEqual({id: 888, name: 'Ekaterina'})
})

test('should delete corresponding users', ()=> {
    delete users['888']

    expect(users['888']).toBeUndefined()
})