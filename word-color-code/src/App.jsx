//import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { pickWord } from './utils/words-utils.js'
import './App.css'

function App() {
	const [wordList, setWordList] = useState([]);

	useEffect(() => {
		fetch('./words.txt')
			.then(response => response.text())
			.then(words => {
				setWordList(words.split('\n').map(word => word.trim()));
			})
			.catch(error => console.error('Error loading words:', error));
	}, []);

	const [wordLength, setWordLength] = useState(4);
	function handleWordLengthChange(event) {
		const length = parseInt(event.target.value, 10);
		console.log('Selected word length:', length);
		setWordLength(length);
	}

	const [randomWord, setRandomWord] = useState("");
	const getRandomWord = useCallback(() => {
		const word = pickWord(wordList, wordLength);
		console.log('Picked word:', word, 'of length', wordLength);
		setRandomWord(word);
	}, [wordList, wordLength]);
	// Add this useEffect to generate word on load
	useEffect(() => {
		if (wordList.length > 0) {
			getRandomWord();
		}
	}, [wordList, wordLength, getRandomWord]);

	return (
		<>
			<h1>Word color</h1>
			<div>
				<label htmlFor="word-length-input">Choose word length:</label>
				<input
					id="word-length-input"
					type="number"
					min="2"
					max="10"
					value={wordLength}
					onChange={handleWordLengthChange}
				/>
			</div>
			<div>
				<button onClick={getRandomWord}>
					Generate Random Word
				</button>
			</div>

			{randomWord && (
				<div className="random-word-display">
					Random Word: <strong>{randomWord}</strong>
				</div>
			)}
		</>
	)
}

export default App
