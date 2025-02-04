import React, { useState } from 'react';

const Contact = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const choices = ['Rock', 'Paper', 'Scissors'];

  const playGame = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);

    // Determine the winner
    if (choice === computerRandomChoice) {
      setResult("It's a draw!"); // Draw condition
    } else if (
      (choice === 'Rock' && computerRandomChoice === 'Scissors') ||
      (choice === 'Paper' && computerRandomChoice === 'Rock') ||
      (choice === 'Scissors' && computerRandomChoice === 'Paper')
    ) {
      setResult('You win! 🎉'); // User wins
    } else {
      setResult('You lose! 😢 I win!'); // Computer wins
    }
  };

  return (
    <>
      <section id="contact" className="py-16 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="mb-4">Find me on the following platforms:</p>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:dana.darafeja@gmail.com"
                className="hover:text-gray-400 flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dana-darafeja-92b22224a/"
                className="hover:text-gray-400 flex items-center justify-center"
              >
                <i className="fab fa-linkedin mr-2"></i>LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Rock, Paper, Scissors Game */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Rock, Paper, Scissors!</h3>
            <div className="flex justify-center mb-4">
              {choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => playGame(choice)}
                  className="mx-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
                >
                  {choice}
                </button>
              ))}
            </div>
            {userChoice && (
              <div className="mt-4 text-gray-700">
                <p>You chose: <strong>{userChoice}</strong></p>
                <p>I chose: <strong>{computerChoice}</strong></p>
                <p className="font-bold">{result}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
