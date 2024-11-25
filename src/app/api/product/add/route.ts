import { db } from "@/db/db.config";
import { uploadImage } from "@/lib/cloudinary";
import { Products } from "@/model/product.model";
import { Product_type } from "@/types/product.type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await db();
        const data = await req.formData();

        const name = data.get("name") as string;
        const description = data.get("description") as string;
        const price = parseFloat(data.get("price") as string);
        const quantity = parseInt(data.get("quantity") as string);
        const image = data.get("image") as File;
        const brand = data.get("brand") as string;
        const colors = data.getAll("colors") as String[];
        const rams = data.getAll("rams") as string[];
        const storages = data.getAll("storages") as string[];
        const battery = data.get("battery") as string;

        if (!name || !description || !price || !quantity || !brand || !image || !colors || !rams || !storages || !battery) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        const uploadedImage = await uploadImage(image, "filter");
        if (!uploadImage) {
            return NextResponse.json({ message: "facing issue while uploading image." }, { status: 404 })
        }

        const product = await Products.create({
            name,
            description,
            price,
            quantity,
            brand,
            image: {
                imageUrl: uploadedImage.secure_url,
                publicId: uploadedImage.public_id
            },
            specifications: {
                colors,
                rams,
                storages,
                battery
            }
        }) as Product_type;

        const isProductCreated = await Products.findById(product._id);

        if (!isProductCreated) {
            return NextResponse.json({ message: "error while creating product" }, { status: 400 });
        }

        return NextResponse.json({ message: "product created successfully", data: isProductCreated }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: "server is not responding try again.", error: error }, { status: 500 })
    }
}