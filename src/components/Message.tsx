function Message({ message }: { message: string }) {
	return (
		<div className="my-8 p-4 text-center text-lg sm:p-6 lg:p-8">{message}</div>
	)
}

export default Message
