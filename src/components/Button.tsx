import { ButtonHTMLAttributes, ReactNode } from "react"

interface btnProp extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const Button = ({ children, ...props }: btnProp) => {
    return (
        <button
            className="bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 px-6 py-2 rounded-lg text-white"
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;