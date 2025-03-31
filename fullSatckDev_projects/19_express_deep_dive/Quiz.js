const db = require('./database.js');
const Question = require('./Question.js');

class Quiz {
  getRandomQuestion() {
    const stmt = db.prepare("SELECT * FROM questions ORDER BY RANDOM() LIMIT 1");
    const question = stmt.get();

    if (question) {
      return new Question(
        question.id,
        question.question,
        question.options,
        question.correctAnswer
      );
    }

    return null;
  }

  checkAnswer(questionId, answer) {
    const stmt = db.prepare("SELECT correctAnswer FROM questions WHERE id = ?");
    const question = stmt.get(questionId);

    if (question) {
      if (question.correctAnswer == answer){
        return true;
      } else {
        return false;
      }
    }
    return null;
  }
}

module.exports = Quiz;