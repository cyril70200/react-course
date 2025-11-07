export function pickWord(wordList, wordLength) {
	const filteredWords = wordList.filter(word => word.length === wordLength);
	return filteredWords[Math.floor(Math.random() * filteredWords.length)];
}
