const Database = require('better-sqlite3');
const db = new Database('/tmp/quiz.db');

db.exec(`CREATE TABLE IF NOT EXISTS questions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  options TEXT NOT NULL,
  correctAnswer TEXT NOT NULL
)`);

db.exec(`
  INSERT INTO questions(question, options, correctAnswer)
  VALUES
  ('Who ate all the Chocolate?', 'Cat, Dog, Monkey', 'Dog'),
  ('Whats 1+1?', '1,2,3', '2')
`);

module.exports = db;