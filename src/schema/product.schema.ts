import * as yup from "yup";

export const productSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    price: yup.number().min(1, "Amout not less than 1.").required("Price is required"),
    quantity: yup.number().min(1, "Quantity not less than 1.").required("Quantity is required"),
    image: yup.mixed().required("Image is required"),
    brand: yup.string().required("Brand is required"),
    colors: yup.array().of(yup.string()).required("Color is required"),
    rams: yup.array().of(yup.string()).required("RAM is required"),
    storages: yup.array().of(yup.string()).required("Storage is required"),
    battery: yup.string().required("Battery is required"),
});

export type product = yup.InferType<typeof productSchema>