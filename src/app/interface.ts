export interface SimplifiedProduct{

    _id: string;
    imageUrl: string[];
    name: string;
    category: string;
}

export interface Category{
    _id: string,
    name: string
}




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