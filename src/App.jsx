import { useState } from "react";
import "./style/App.css";
import Header from "./Components/Header";
import Theory from "./Components/Theory";
import { questions } from "./assets/questions";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import Quiz from "./Components/Quiz";
import Body from "./Components/Body";
import Nav from "./Components/Nav";

/**
 * TODO: import theory and questions
 */

/**
 * main entry point to the app
 * @author Ilian Daviaud, 409-1 (made app)
 * @author Sasha Ghuravleva, 409-1 (helped with Theory)
 * @author Nastia Maley, 409-1 (helped with Theory)
 * @author Timofei Pavlovetz, 409-1 (helped with questions)
 * @abstract A quiz app made for a university project
 * made for students to read theory and practice on
 * the topic of "The Passive Voice in English"
 */
function App() {
  /**
   *  checks if the option clicked is correct
   * @param {boolean} isCorrect hidden value of every question.
   */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < mixedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /**
   *  resets the quiz
   */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  /**
   *  switches the state of the app to show the Theory tab
   */
  const handleShowTheory = () => {
    setShowTheory(true);
    setShowQuiz(false);
  };
  /**
   *  switches the state of the app to show the Quiz tab
   */
  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowTheory(false);
  };
  /**
   *  used in dev mode to reset completely the app
   */
  const handleHResetElements = () => {
    setShowTheory(false);
    setShowQuiz(false);
  };
  // Initiating states
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showTheory, setShowTheory] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  // copying local variable of questions and scrambling after each render
  let mixedQuestions = questions.sort(() => Math.random() - 0.5);
  return (
    <div className="main">
      {/* start of navigation*/}
      <Nav>
        <div className="headerwrapper">
          <Header name="The Passive Voice" />
        </div>
        <div className="buttonwrapper">
          {!showTheory && <Button name="Show Theory" func={handleShowTheory} />}
          {!showTheory && !showQuiz && (
            <Button name="Show Quiz" func={handleShowQuiz} />
          )}
          {/*<Button name="Reset" func={handleHResetElements} />*/}
        </div>
      </Nav>
      {/* end of navigation*/}

      {/* start of body*/}
      <Body>
        {showTheory && (
          <div className="theory-wrapper">
            <Theory />
            <Button name="Show Quiz" func={handleShowQuiz} />
          </div>
        )}
        {showQuiz && (
          <Quiz
            score={score}
            showResults={showResults}
            mixedQuestions={mixedQuestions}
            restartGame={restartGame}
            handleShowTheory={handleShowTheory}
            currentQuestion={currentQuestion}
            optionClicked={optionClicked}
          />
        )}
      </Body>
      {/* end of body*/}
    </div>
  );
}

export default App;
