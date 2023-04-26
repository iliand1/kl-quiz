import Button from "./Button";
/**
 *  final result tab of quiz
 */
function Finalresults({ score, questions, restartGame, handleShowTheory }) {
  /**
   *  checks if the score meets a threshold
   * @param {number} score the score got in the quiz.
   * @returns {boolean} if it met the requirements
   */
  const isGood = (score) => {
    return percentage(score) < 80;
  };
  /**
   *  calculates the percentage of the score
   * @param {number} score the score got in the quiz.
   * @returns {number} a percentage without the "%"
   */
  const percentage = (score) => {
    return (score / questions.length) * 100;
  };

  return (
    <div className="final-results">
      <h1>Final Results</h1>
      <h2>
        {score} out of {questions.length} correct - ({percentage(score).toFixed(0)}%)
      </h2>
      <Button name="Restart game" func={restartGame} />
      {isGood(score) && <Button name="Show Theory" func={handleShowTheory} />}
    </div>
  );
}

export default Finalresults;
