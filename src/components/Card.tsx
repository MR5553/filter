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
        <div className="flex flex-col bg-white p-2 rounded"
        >
            <Image
                src={image.imageUrl}
                alt={name}
                width={200}
                height={200}
                priority={true}
                style={{ width: "100%", height: "100%" }}
            />
            <h2 className="text-base font-medium truncate">{name}</h2>
            <span>{currecy_formater.format(price)}</span>
        </div>
    )
}