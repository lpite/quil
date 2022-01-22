import { h } from "preact";
import { useState } from "preact/hooks";

interface AnswerProps {
  answerNumber: number;
  answerText: string;
  isRight: boolean;
}
export default function Answer({
  answerNumber,
  answerText,
  isRight,
}: AnswerProps) {
  const [highlightColor, setHighlightColor] = useState("");
  function choseAnswer() {
    if (isRight) {
      setHighlightColor("green");
    }
  }
  return (
    <div className="answer">
      <span className="number">{answerNumber}</span>
      <input
        type="radio"
        name="answer"
        id={`answer${answerNumber}`}
        className="radio"
      />
      <label className="label" htmlFor={`answer${answerNumber}`}>
        {answerText}
      </label>
    </div>
  );
}
