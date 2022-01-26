import { h } from "preact";
import { route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import Popup from "../components/popup/Popup";
import Answer from "../components/questionPage/Answer";

interface QuestionProps {
  path: string;
}
interface QuestionObject {
  id: number;
  questionText: string;
  answers: Array<AnswerObject>;
}
interface AnswerObject {
  text: string;
  isRight?: boolean;
}
export default function Question({}: QuestionProps) {
  const [disabledButton, setDisabledButton] = useState(true);
  const [isRightAnswerSelected, setIsRightAnswerSelected] = useState(false);
  const [question, setQuestion] = useState({} as QuestionObject);
  const [highlightAnswers, setHighlightAnswers] = useState(false);
  const [showPoup, setShowPoup] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  function changeIsRight(value: boolean) {
    setDisabledButton(false);
    setIsRightAnswerSelected(value);
  }
  function toNextQuestion(e: h.JSX.TargetedEvent) {
    e.preventDefault();

    setHighlightAnswers(true);

    if (isRightAnswerSelected && highlightAnswers) {
      setHighlightAnswers(false);
      setQuestionId(questionId + 1);
      fetchQuestion(questionId + 1);
      setDisabledButton(true);
    }
    if (isRightAnswerSelected && !highlightAnswers) {
      setShowPoup(true);
    }
    if (!isRightAnswerSelected && highlightAnswers) {
      setHighlightAnswers(false);
      setQuestionId(questionId + 1);
      fetchQuestion(questionId + 1);
      setDisabledButton(true);
    }
  }
  useEffect(() => {
    if (showPoup) {
      setTimeout(() => {
        setShowPoup(false);
      }, 2000);
    }
  }, [showPoup]);
  useEffect(() => {
    if (!Object.values(question).length) {
      fetchQuestion(questionId);
    }
  }, [question]);
  function fetchQuestion(id: number) {
    fetch("../../assets/questions.json").then(async (data) => {
      const json = await data.json();
      if (json[id]) {
        setQuestion(json[id]);
      } else {
        setQuestionId(0);
        setQuestion(json[0]);
      }
    });
  }
  return (
    <main className="question-page">
      <Popup isOpen={showPoup} />
      <div className="question-block">
        <h3 className="title">Питання</h3>
        <span className="text">{question.questionText}</span>
      </div>
      <form onSubmit={toNextQuestion} className="answers">
        <h3 className="title">Відповіді</h3>
        {question.answers &&
          question.answers.map((answer, index) => (
            <Answer
              key={`${questionId}_${index}`}
              answerNumber={index + 1}
              answerText={answer.text}
              isRight={answer.isRight || false}
              setIsRightAnswerSelected={changeIsRight}
              isRightAnswerSelected={isRightAnswerSelected}
              highlight={highlightAnswers}
            />
          ))}

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
