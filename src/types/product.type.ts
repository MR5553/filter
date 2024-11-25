import { Document } from "mongoose"

interface Image {
    url: string;
    alt: string;
}

export interface Product {
    name: string;
    category: string;
    brand: string;
    price: number;
    description: string;
    stock: number;
    images: Image[];
    specifications: Record<string, any>;
    status: "active" | "inactive" | "outOfStock";
    ratings?: {
        average: number;
        count: number;
    };
    slug: string;
}

export interface Product_type extends Product, Document { }