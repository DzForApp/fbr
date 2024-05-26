

export interface IRating {
    rate: number,
    count: number
}

export interface IProduct {
    id: string,
    name: string,
    description: string,
    rating: IRating,
    slug: string,
    mainImg: string,
    category: ICategory,
    gallery: string[]
}

export interface ICategory {
    id: string,
    name: string,
    image: string,
    slug: string
}