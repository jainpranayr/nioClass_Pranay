import { QuestionIds } from '../data'
import Button from './Button'

const QuestionsNavigator = ({
	currentStepIndex,
	setCurrentStepIndex,
}: {
	currentStepIndex: number
	setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
	const totalSteps = QuestionIds.length
	const isFirstStep = currentStepIndex === 0
	const isLastStep = currentStepIndex === totalSteps - 1

	const goBack = () => {
		if (!isFirstStep) {
			setCurrentStepIndex(currentStepIndex - 1)
		}
	}

	const goForward = () => {
		if (!isLastStep) {
			setCurrentStepIndex(currentStepIndex + 1)
		}
	}

	return (
		<div>
			<div className="relative mt-6">
				<div
					className="absolute top-0 left-0 z-10 h-[3px] w-full bg-indigo-600"
					style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
				/>
				<div className="absolute top-0 left-0 h-[3px] w-full bg-gray-300" />
			</div>

			<div className="flex items-center justify-between py-4 px-6">
				<p className="text-base font-medium text-gray-300">
					{currentStepIndex + 1} / {totalSteps}
				</p>

				<div className="space-x-4">
					<Button onClick={goBack} disabled={isFirstStep}>
						Back
					</Button>
					<Button onClick={goForward} disabled={isLastStep}>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

export default QuestionsNavigator
