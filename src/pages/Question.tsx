import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { APIURL } from "../../config";
import Popup from "../components/popup/Popup";
import Answer from "../components/questionPage/Answer";
import Loading from "../components/questionPage/Loading"

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
  const [isLoading, setIsLoading] = useState(false);

  const [showPoup, setShowPoup] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  function changeIsRight(value: boolean) {
    setDisabledButton(false);
    setIsRightAnswerSelected(value);
  }
  function toNextQuestion(e: h.JSX.TargetedEvent) {
    e.preventDefault();
    setHighlightAnswers(true);
    if (!highlightAnswers) {
      setShowPoup(true);
    }
    if (isRightAnswerSelected && highlightAnswers) {
      setHighlightAnswers(false);
      setQuestionId(questionId + 1);
      fetchQuestion(questionId + 1);
      setDisabledButton(true);
      setShowPoup(false);
    }
    if (!isRightAnswerSelected && highlightAnswers) {
      setHighlightAnswers(false);
      setQuestionId(questionId + 1);
      fetchQuestion(questionId + 1);
      setDisabledButton(true);
      setShowPoup(false);
    }
  }
  useEffect(() => {
    if (showPoup) {
      const timeOut = setTimeout(() => {
        setShowPoup(false);
        clearTimeout(timeOut);
      }, 5000);
    }
  }, [showPoup]);
  useEffect(() => {
    if (!Object.values(question).length) {
      fetchQuestion(questionId);
    }
  }, [question]);
  function fetchQuestion(id: number) {
    setIsLoading(true);
    fetch(`${APIURL}/get/question/?id=${id}`).then(async (response) => {
      setIsLoading(false);
      const json = await response.json();
      if (json) {
        setQuestion(json);
        setQuestionId(json.id);
      } else {
        setQuestionId(0);
        setQuestion(json);
      }
    }).catch(() => {
      setIsLoading(false);
    });
  }
  return (
    <main className="question-page">
      <Loading isLoading={isLoading} />
      <Popup isOpen={showPoup} success={isRightAnswerSelected} />
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
