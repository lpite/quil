import { h } from "preact";
import { useState } from "preact/hooks";

interface AnswerProps {
  answerNumber: number;
  answerText: string;
  isRight: boolean;
  setIsRightAnswerSelected: (isRight: boolean) => void;
  isRightAnswerSelected: boolean;
  highlight: boolean;
}
export default function Answer({
  answerNumber,
  answerText,
  isRight,
  setIsRightAnswerSelected,
  isRightAnswerSelected,
  highlight,
}: AnswerProps) {
  function setIsRight(e: MouseEvent) {
    if (!highlight) {
      setIsRightAnswerSelected(isRight);
    } else {
      e.preventDefault();
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
      <label
        onClick={setIsRight}
        htmlFor={`answer${answerNumber}`}
        className={` ${
          (highlight && isRight && !isRightAnswerSelected) ||
          (highlight && isRight && isRightAnswerSelected)
            ? "green"
            : ""
        } ${highlight && !isRightAnswerSelected ? "red" : ""} label`}
      >
        {answerText}
      </label>
    </div>
  );
}
