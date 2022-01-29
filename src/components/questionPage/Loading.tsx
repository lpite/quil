import { h } from "preact"

interface LoadingProps {
	isLoading: boolean
}
export default function Loading({ isLoading }: LoadingProps) {
	return (
		<div className={`question-loading ${isLoading ? "question-loading-show" : ""}`}>
			<span class="circle"></span>
		</div>
	)
}