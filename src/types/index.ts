type Question = {
	ChapterID: string
	QuestionID: string
	UpdateQuestion: number
	ExpectedTime: number
	Difficulty: string
	Source: string
	PostQuestionNotes: string
	Tags: string
	Question: string
	QuestionSummary: string
	Step1: string
	Result1: string
	Explanation1: string
	Step1Timer: number
	Step2: string
	Result2: string
	Explanation2: string
	Step2Timer: number
	Step3: string
	Result3: string
	Explanation3: string
	Step3Timer: number
	Step4: string
	Result4: string
	Explanation4: string
	Step4Timer: number
	Step5: string
	Result5: string
	Explanation5: string
	Step5Timer: number
	Step6: string | null
	Result6: string | null
	Explanation6: string | null
	Step6Timer: number | null
	Step7: string | null
	Result7: string | null
	Explanation7: string | null
	Step7Timer: number | null
	Step8: string | null
	Result8: string | null
	Explanation8: string | null
	Step8Timer: number | null
}

export type Questions = Array<Question>
