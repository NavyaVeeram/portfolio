import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const textLength = text.length;

    const typewriterInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex === textLength) {
          clearInterval(typewriterInterval); // Stop the typewriter effect when the text is fully displayed
        }
        return prevText + text[currentIndex++];
      });
    }, 100); // Adjust the interval (in milliseconds) to control the typing speed

    return () => {
      clearInterval(typewriterInterval); // Cleanup interval on component unmount
    };
  }, [text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
