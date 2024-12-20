import React, { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from "react";

interface props extends InputHTMLAttributes<HTMLElement> {
};

export const Range = forwardRef<HTMLInputElement, props>(({ name, step = 1, min = 0, max = 100, onChange, ...rest }: props, ref) => {
    const [range, setRange] = useState<number[]>([Number(min || 0), Number(max || 0)]);
    const gap = Number(step || 0);

    const handleMinChange = (value: number) => {
        if (range[1] - value >= gap) {
            setRange([value, range[1]]);
            onChange?.({ target: { name, value: [value, range[1]] as number[] } } as any);
        }
    };

    const handleMaxChange = (value: number) => {
        if (value - range[0] >= gap) {
            setRange([range[0], value]);
            onChange?.({ target: { name, value: [value, range[1]] as number[] } } as any);
        }
    };


    return (
        <div className="relative min-h-14">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range[0]}
                onChange={(e) => handleMinChange(Number(e.target.value))}
                {...rest}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range[1]}
                onChange={(e) => handleMaxChange(Number(e.target.value))}
                {...rest}
            />
            <div className="absolute w-full h-[6px] bg-blue-500 top-[25px] -z-10 rounded-lg" />
        </div>
    )
})

Range.displayName = "Range";