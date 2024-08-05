import React from 'react';

interface TitleProps {
    text: string;
    elementId: string;
}

// add react prop for text
const Title = ({ text, elementId }: TitleProps) => {
    return (
        <div>
        <h1 id={elementId} className="text-3xl font-bold underline">
            {text}
        </h1>
        </div>
    );
}

export default Title;