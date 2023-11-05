type Ad = {
    id: number
    title_no: string
    title_en: string
    description_no: string
    description_en: string
    category_no: string
    category_en: string
    subcategory_no: string
    subcategory_en: string
    location: string
    price: number
    seller: Seller
    images: string[]
}

type Seller = {
    id: number
    name: string
    phone: number
}

type Category = {
    categories_no: SubCatArray[]
    categories_en: SubCatArray[]
}

type SubCatArray = {
    title: string
    subcategories: string[]
}
