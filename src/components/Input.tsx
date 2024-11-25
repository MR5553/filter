"use client"

import React, { forwardRef, InputHTMLAttributes } from 'react'

interface props extends InputHTMLAttributes<HTMLElement> {

}

const Input = forwardRef<HTMLInputElement, props>(({ name, type, className, ...prop }: props, ref) => {
    return (
        <input
            type={type}
            name={name}
            ref={ref}
            {...prop}
            className={`w-full text-base bg-white outline-blue-600 p-3 rounded-lg border border-neutral-400 border-solid invalid:bg-red-50 invalid:outline-red-600 ${className}`}
        />
    )
});

Input.displayName;
export default Input;