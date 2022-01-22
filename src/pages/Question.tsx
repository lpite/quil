import { h } from "preact";
import { useState } from "preact/hooks";
import Answer from "../components/questionPage/Answer";

interface QuestionProps {
  path: string;
}
export default function Question({}: QuestionProps) {
  const [disabledButton, setDisabledButton] = useState(false);
  return (
    <main className="question-page">
      <div className="question-block">
        <h3 className="title">Питання</h3>
        <span className="text">Осьовим перерізом конуса є</span>
      </div>
      <form className="answers">
        <h3 className="title">Відповіді</h3>
        <Answer
          answerNumber={1}
          answerText="прямокутний трикутник"
          isRight={true}
        />
        <Answer answerNumber={2} answerText="коло" isRight={false} />
        <Answer
          answerNumber={3}
          answerText="рівнобедрений трикутник"
          isRight={false}
        />
        <Answer answerNumber={4} answerText="трапеція" isRight={false} />

        <div className="buttons">
          <button className="button">здаюсь</button>
          <button className="button" disabled={disabledButton}>
            далі
          </button>
        </div>
      </form>
    </main>
  );
}
