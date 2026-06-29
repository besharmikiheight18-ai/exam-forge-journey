import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const ExamPrep: React.FC = () => {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 1,
    },
    {
      id: 2,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correct: 1,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
  };

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Exam Practice</h1>

      {currentQuestion < questions.length ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-600 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question.question}</h2>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 transition ${
                  answered
                    ? index === question.correct
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 bg-gray-50'
                    : 'border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <button
              onClick={isLastQuestion ? () => setCurrentQuestion(0) : nextQuestion}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              {isLastQuestion ? 'Restart Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-5xl font-bold text-indigo-600 mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-xl text-gray-600 mb-6">
            You scored {Math.round((score / questions.length) * 100)}%
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setAnswered(false);
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default ExamPrep;