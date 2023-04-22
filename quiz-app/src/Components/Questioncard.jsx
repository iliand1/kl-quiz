/**
 *  question card of quiz
 */
function Questioncard({ mixedQuestions, currentQuestion, optionClicked }) {
  return (
    <div className="question-card">
      {/* Current Question  */}
      <h2>
        Question: {currentQuestion + 1} out of {mixedQuestions.length}
      </h2>
      <h3 className="question-text">{mixedQuestions[currentQuestion].text}</h3>

      {/* List of possible answers  */}
      <ul>
        {mixedQuestions[currentQuestion].options.map((option) => {
          return (
            <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Questioncard;
