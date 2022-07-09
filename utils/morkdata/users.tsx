const users = [
    {
        id: 1,
        email: 'john@yopmail.com',
        password: '123456',
        role: 'customer',
        profile: {
            name: 'John',
            surname: 'Doe',
            avatar: 'https://picsum.photos/id/1/200/200',
            adresses: [
                {
                    id: 1,
                    city: 'Москва',
                    street: 'Проспект Просвещения',
                    house: '1',
                    flat: '1',
                    latitude: 55.755826,
                    longitude: 37.6172999,
                },
            ],
        },
        myshop: [
            {
                id: 1,
                name: 'Магазин 1',
                address: 'Москва, Проспект Просвещения, 1',
                phone: '+7 (999) 999-99-99',
                email: '',
                latitude: 55.755826,
                longitude: 37.6172999,
                workTime: 'Пн-Пт: 10:00 - 20:00',
                image: 'https://picsum.photos/id/1/200/200',
                description: 'Описание магазина 1',
            },
        ],
        orders: [],
        cart: [],
        payment: [],
        notification: [],
        coupon: [],
    }
]

export const signUp = (user: any) => {
    users.push(user)
}

export const signIn = (email: string, password: string) => {
    const user = users.find(user => user.email === email && user.password === password)
    return user
}

export const getUser = (id: number) => {
    const user = users.find(user => user.id === id)
    return user
}

export const getUsers = () => {
    return users
}

export const updateUser = (id: number, user: any) => {
    const index = users.findIndex(u => u.id === id)
    users[index] = user
}

export const deleteUser = (id: number) => {
    const index = users.findIndex(u => u.id === id)
    users.splice(index, 1)
}

export const getUserOrders = (id: number) => {
    const user = users.find(user => user.id === id)
    return user?.orders
}

export const getUserCart = (id: number) => {
    const user = users.find(user => user.id === id)
    return user?.cart
}

export const getUserPayment = (id: number) => {
    const user = users.find(user => user.id === id)
    return user?.payment
}

export const getUserNotification = (id: number) => {
    const user = users.find(user => user.id === id)
    return user?.notification
}

export const getUserCoupon = (id: number) => {
    const user = users.find(user => user.id === id)
    return user?.coupon
}