import { QuestionIds } from '../data'

const Question = ({
	currentQuestionIndex,
}: {
	currentQuestionIndex: number
}) => {
	return (
		<div className="px-2 py-4 text-center">
			{QuestionIds[currentQuestionIndex]}
		</div>
	)
}

export default Question
