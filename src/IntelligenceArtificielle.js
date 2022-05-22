import React, { useState } from 'react';

function IntelligenceArtificielle() {
  var questions = [
    {
      q: 'sa va ?',
      answers: ['oui', 'non'],
    },
    {
      q: 'tageul',
      answers: ['tg', 'non'],
    },
  ];

  const [answers, setAsnwers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  function answerQ(e, question_index, answer_index) {
    // on stocke la réponse
    setAsnwers((oldArray) => [
      ...oldArray,
      {
        q: questions[question_index].q,
        answered: questions[question_index].answers[answer_index],
      },
    ]);

    // on vérifie si on a toujours des questions à afficher
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // si c'est pas le cas, alors c'est la fin on affiche les réponses
      setShowAnswers(true);
    }
  }

  function showQuestion(i) {
    // on récupère la question et ses réponses possibles
    var q = questions[i];
    var answers = q.answers.map((a, a_i) => (
      <button key={a_i} onClick={(e) => answerQ(e, i, a_i)}>
        {a}
      </button>
    ));

    return (
      <div>
        {q.q}
        {answers}
      </div>
    );
  }

  return (
    <div className="App">
      {
        // si le questionnaire est fini, on affiche les réponses
        showAnswers ? (
          <div>
            <b>Fin du questionnaire</b>
            <br />
            <ul>
              {answers.map((a, i) => {
                return (
                  <li key={i}>
                    {a.q} <br />
                    Vous avez répondu <b>{a.answered}</b>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          // sinon on affiche la question actuelle
          showQuestion(currentQuestion)
        )
      }
    </div>
  );
}

export default IntelligenceArtificielle;
