import mongoose from "mongoose";

type ConnectionObject = {
    isConnected: number;
};

const connection: ConnectionObject = {
    isConnected: 0
};

export async function db(): Promise<void> {
    if (connection.isConnected === 1) {
        console.log("Already connected to database.");
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    try {
        const dbConfig = await mongoose.connect(process.env.MONGODB_URI, { dbName: "Filter" });

        connection.isConnected = dbConfig.connection.readyState;
        console.log("Database connected successfully", connection.isConnected);

    } catch (error) {
        console.log("Database connection error: ", error);
        throw error;
    }
}