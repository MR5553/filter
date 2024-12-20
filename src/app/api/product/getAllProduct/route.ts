import { db } from "@/db/db.config";
import { Products } from "@/model/product.model";
import { FilterType } from "@/types/filter.type";
import { Product_type } from "@/types/product.type";
import { FilterQuery } from "mongoose";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    await db();
    try {
        const body = await req.json();
        const { price, Brands, rams, Storages, colors }: FilterType = body.filter;

        const query: FilterQuery<Product_type> = {};

        if (price[0]) query.price = { $gte: price[0] };
        if (price[1]) query.price = { $lte: price[1] };
        if (Brands.length > 0) query.brand = { $in: Brands };
        if (colors.length > 0) query["specifications.colors"] = { $in: colors };
        if (rams.length > 0) query["specifications.rams"] = { $in: rams };
        if (Storages.length > 0) query["specifications.storages"] = { $in: Storages };

        const products = await Products.find(query);

        if (!products) {
            return NextResponse.json({ error: "No products found" }, { status: 404 });
        }

        return NextResponse.json({ products, sucess: true }, { status: 200 });

    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
};
