//
// Global Types

export interface ToastMessageProps {
    type: string,
    message: string
}

export interface LayoutDashboardProps {
    children: any,
    onRefresh?: any,
    error?: any,
    loading?: any,
    setNotify?: any
}

export interface Category {
    _id?: string
    name?: string
    slug?: string
}

export interface Creator {
    role?: string
    _id?: string
    name?: string
}

export interface Product {
    _id?: null | string
    title?: null | string
    price?: null |string | number
    category?: null | Category
    description?: null | string
    createdBy?: null | Creator
    createdAt?: null | string
    updatedAt?: null | string
    slug?: null | string
    image?: null | string
}