import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button
			className={`max-w-max cursor-pointer rounded border border-transparent bg-indigo-700 py-1 px-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80`}
			{...props}>
			{children}
		</button>
	)
}

export default Button
