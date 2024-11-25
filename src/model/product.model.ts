import { Product_type } from "@/types/product.type";
import { model, models, Schema } from "mongoose";

const productSchema = new Schema<Product_type>({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    category: {
        type: String,
        required: true,
        index: true    // Add index for faster category filtering
    },
    brand: {
        type: String,
        required: true,
        index: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
        index: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: [0, "Stock cannot be negative"],
        validate: {
            validator: Number.isInteger,
            message: "Stock must be an integer"
        }
    },
    status: {
        type: String,
        enum: ["active", "inactive", "outOfStock"],
        default: "active",
        index: true
    },
    images: [
        {
            url: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        }
    ],
    specifications: {
        type: Map,
        of: Schema.Types.Mixed,
        default: new Map()
    },
    ratings: {
        average: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        count: {
            type: Number,
            default: 0,
            min: 0
        }
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

productSchema.index({ category: 1, brand: 1 });
productSchema.index({ name: "text", description: "text" });

productSchema.pre("save", function (next) {
    if (this.stock === 0) {
        this.status = "outOfStock";
    }
    next();
});

const Products = models.Products || model<Product_type>("Products", productSchema);

export { Products };