import { Schema } from "mongoose";

export const ElectronicsSpecification = new Schema({
    processor: String,         // e.g., "Intel Core i7"
    ram: Number,               // e.g., 16 (in GB)
    storage: Number,           // e.g., 512 (in GB for SSD/HDD)
    screenSize: Number,        // e.g., 15.6 (in inches)
    battery: String,           // e.g., "4000mAh"
    operatingSystem: String,   // e.g., "Windows 10" or "Android"
    camera: String,            // e.g., "12MP"
    connectivity: [String],    // e.g., ["WiFi", "Bluetooth", "5G"]
    ports: [String],           // e.g., ["USB-C", "HDMI"]
});

export const ClothesSpecification = new Schema({
    material: String,          // e.g., "Cotton", "Polyester"
    size: [String],            // e.g., ["S", "M", "L", "XL"]
    color: [String],           // e.g., ["Red", "Blue", "Black"]
    gender: String,            // e.g., "Men", "Women", "Unisex"
    pattern: String,           // e.g., "Solid", "Striped", "Plaid"
    sleeveLength: String,      // e.g., "Short Sleeve", "Long Sleeve"
    fit: String,               // e.g., "Regular", "Slim", "Loose"
});

export const FurnitureSpecification = new Schema({
    dimensions: {
        length: Number,          // e.g., 200 (in cm)
        width: Number,           // e.g., 100 (in cm)
        height: Number,          // e.g., 75 (in cm)
    },
    material: String,          // e.g., "Wood", "Metal"
    color: String,             // e.g., "Brown", "White"
    weightCapacity: Number,    // e.g., 200 (in kg)
    style: String,             // e.g., "Modern", "Vintage"
    assemblyRequired: Boolean, // e.g., true or false
});

const BookSpecification = new Schema({
    author: String,            // e.g., "J.K. Rowling"
    genre: [String],           // e.g., ["Fantasy", "Adventure"]
    language: String,          // e.g., "English"
    pages: Number,             // e.g., 350
    publisher: String,         // e.g., "Penguin Random House"
    publicationDate: Date,     // e.g., new Date("2007-07-21")
    ISBN: String,              // e.g., "978-3-16-148410-0"
});


const GrocerySpecification = new Schema({
    weight: Number,            // e.g., 500 (in grams)
    organic: Boolean,          // e.g., true or false
    expiryDate: Date,          // Expiration date of the product
    origin: String,            // e.g., "California, USA"
    ingredients: [String],     // e.g., ["Water", "Sugar", "Salt"]
})