const shops = [
    {
        id: 1,
        name: 'Магазин 1',
        address: 'г. Москва, ул. Пушкина, д. 1',
        phone: '+7 (999) 999-99-99',
        email: '',
        latitude: 55.755826,
        longitude: 37.6172999,
        workTime: 'Пн-Пт: 10:00 - 20:00',
        image: 'https://picsum.photos/id/1/200/200',
        description: 'Описание магазина 1',
        products: [
            {
                id: 1,
                name: 'Товар 1',
                price: 100,
                image: 'https://picsum.photos/id/1/200/200',
                description: 'Описание товара 1',
            },
            {
                id: 2,
                name: 'Товар 2',
                price: 200,
                image: 'https://picsum.photos/id/2/200/200',
                description: 'Описание товара 2',
            },
            {
                id: 3,
                name: 'Товар 3',
                price: 300,
                image: 'https://picsum.photos/id/3/200/200',
                description: 'Описание товара 3',
            },
            {
                id: 4,
                name: 'Товар 4',
                price: 400,
                image: 'https://picsum.photos/id/4/200/200',
                description: 'Описание товара 4',
            },
            {
                id: 5,
                name: 'Товар 5',
                price: 500,
                image: 'https://picsum.photos/id/5/200/200',
                description: 'Описание товара 5',
            },
            {
                id: 6,
                name: 'Товар 6',
                price: 600,
                image: 'https://picsum.photos/id/6/200/200',
                description: 'Описание товара 6',
            },
        ],
    },
]

export const createShop = (shop: any) => {
    return {
        id: shop.id,
        name: shop.name,
        address: shop.address,
        phone: shop.phone,
        email: shop.email,
        latitude: shop.latitude,
        longitude: shop.longitude,
        workTime: shop.workTime,
        image: shop.image,
        description: shop.description,
        products: shop.products,
    }
}

export const getShop = (id: any) => {
    return shops.find((shop) => shop.id === id)
}

export const getShops = () => {
    return shops.map((shop) => createShop(shop))
}

export const updateShop = (shop: any) => {
    const index = shops.findIndex((item) => item.id === shop.id)
    shops[index] = shop
}

export const deleteShop = (id: any) => {
    const index = shops.findIndex((item) => item.id === id)
    shops.splice(index, 1)
}
