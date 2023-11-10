export const removeFirstWord = (word: string): string => {
	const index = word.indexOf(":");

	if (index !== -1) {
		return word.slice(index + 1).trim();
	}

	return word;
};
