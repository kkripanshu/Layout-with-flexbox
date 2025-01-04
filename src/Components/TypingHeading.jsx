import React, {useState, useEffect} from 'react'

const TypingHeading = () => {

    const text = "Layout With FlexBox   ";
    const colors = [
        'text-blue-200',
        'text-blue-300',
        'text-blue-400',
        'text-green-500',
        'text-red-600',
        'text-red-700',
        'text-yellow-800',
        'text-yellow-900',
    ]

    const fonts = [
        'font-sans',
        'font-serif',
        'font-mono',
    ]

    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);


    useEffect(() => {
        let timeout;

        if (index < text.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, 250);
        }
        else {
            setDisplayText('L');
            setIndex(1);
        }

        return () => clearTimeout(timeout);


    }, [index, text]);


    const currentColor = colors[index % colors.length];
    const currentFont = fonts[index % fonts.length];


  return (
      <h1 className={`text-4xl ${currentColor} ${currentFont}`}>
          {displayText}
      </h1>
  )
}

export default TypingHeading