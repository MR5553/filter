import { currecy_formater } from "@/lib/formatter";
import { Product } from "@/types/product.type";
import Image from "next/image";

interface CardProps {
    name: string;
    price: number;
    brand: string;
    image: {
        imageUrl: string
    }
}


export default function Card({ name, price, brand, image }: CardProps) {
    return (
        <div className="flex flex-col bg-slate-200"
        >
            <Image
                src={image.imageUrl}
                width={200}
                height={200}
                alt={name}
                priority={false}
            />
            <h2 className="text-base font-medium">{name}</h2>
            <span>{currecy_formater.format(price)}</span>
        </div>
    )
}