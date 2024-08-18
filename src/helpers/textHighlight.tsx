export const highlightText = (text: string, highlights: string[]) => {
  const words = text.split(' ');

  return words.map((word, index) => {
    const key = `${word}-${index}`;

    return highlights.includes(word) ? (
      <span key={key} className="text-[#223DDA]">{word}</span>
    ) : (
      <span key={key}>{word}</span>
    );
  });
};

