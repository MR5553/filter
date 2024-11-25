import { v2 as cloudinary, UploadApiResponse } from "cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File, folder: string): Promise<UploadApiResponse> {
    const bytes = Buffer.from(await file.arrayBuffer());

    return new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: "image", folder: folder },
            (error, result) => {
                if (error) {
                    return reject(error.message);
                }
                resolve(result as UploadApiResponse);
            }
        );

        uploadStream.end(bytes);
    });
};


export async function deleteFromCloudinary(publicId: string, resourceType: "image" | "raw" | "auto" | "video") {
    try {
        if (!publicId) {
            console.log("public_id is missing!");
        }
        const res = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType, })

        return res;

    } catch (error) {
        return console.error("Error deleting image:", error);
    }
}