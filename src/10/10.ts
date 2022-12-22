export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

type CompanyType = {id: number, title: string}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power;
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
    // copy.address = {...copy.address, city: city}

};

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: 'Macbook'
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [
            ...u.books,
            newBook
        ]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => ({
    ...u, books: u.books.filter(b => b !== bookForDelete)
})


export const updateCompanyTitle = (u: WithCompaniesType, companyId: number, newTitle: string) => {
        const copy: WithCompaniesType = {
            ...u,
            companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
        }
        return copy
}

export const updateCompanyTitle2 = (companies: {[key: string]: Array<CompanyType>}, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy;
}