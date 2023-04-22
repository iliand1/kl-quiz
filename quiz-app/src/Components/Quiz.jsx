import Finalresults from "./Finalresults";
import Questioncard from "./Questioncard";
/**
 *  quiz functionality of app
 */
function Quiz({
  score,
  showResults,
  mixedQuestions,
  restartGame,
  handleShowTheory,
  currentQuestion,
  optionClicked,
}) {
  return (
    <div className="App">
      <h1>Quiz</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <Finalresults
          score={score}
          questions={mixedQuestions}
          restartGame={restartGame}
          handleShowTheory={handleShowTheory}
        />
      ) : (
        <Questioncard
          mixedQuestions={mixedQuestions}
          currentQuestion={currentQuestion}
          optionClicked={optionClicked}
        />
      )}
    </div>
  );
}

export default Quiz;
