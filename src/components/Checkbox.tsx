import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    brand: {
        id: string;
        name: string;
    };
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ brand, ...rest }: Props, ref) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                name={brand.name}
                value={brand.name}
                id={brand.id}
                ref={ref}
                className="w-4 h-4 cursor-pointer"
                {...rest}
            />
            <label htmlFor={brand.id} className="cursor-pointer">{brand.name}</label>
        </div>
    )
})

Checkbox.displayName = "Checkbox";
