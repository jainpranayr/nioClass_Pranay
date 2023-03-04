import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { useEffect, useState } from 'react'
import { QuestionIds, API_BASE_URL } from '../data'
import { Questions } from '../types'
import Message from './Message'

const Question = ({
	currentQuestionIndex,
}: {
	currentQuestionIndex: number
}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	const [questionData, setQuestionData] = useState<string>('')

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			try {
				const response = await fetch(
					`${API_BASE_URL}?QuestionID=${QuestionIds[currentQuestionIndex]}`
				)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = (await response.json()) as Questions
				setQuestionData(data[0].Question)
			} catch (err) {
				setError(err as Error)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [currentQuestionIndex])

	if (error) {
		return <Message message={`An error occurred: ${error.message}`} />
	}

	if (isLoading) {
		return <Message message="Loading..." />
	}

	return (
		<div className="my-8 p-4 text-center text-lg">
			<MathJaxContext>
				<MathJax>
					<div dangerouslySetInnerHTML={{ __html: questionData }}></div>
				</MathJax>
			</MathJaxContext>
		</div>
	)
}

export default Question
