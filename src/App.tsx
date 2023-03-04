import { useState } from 'react'
import { Question } from './components'
import QuestionsNavigator from './components/QuestionsNavigator'

function App() {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className="px-2">
			<div className="my-40 mx-auto w-full max-w-xl rounded bg-zinc-800 text-white shadow-xl">
				<Question currentQuestionIndex={currentIndex} />
				<QuestionsNavigator
					currentStepIndex={currentIndex}
					setCurrentStepIndex={setCurrentIndex}
				/>
			</div>
		</div>
	)
}

export default App
