import React, { useState } from 'react';

function Profilepic() {
    const image = "./src/assets/coder.jpeg";
    const [isVisible, setIsVisible] = useState(false);

    const toggleImage = () => {
        setIsVisible(!isVisible); // Toggle the visibility of the image
    };

    const hideImage = (e) => {
        setIsVisible(false); // Hide the image when it is clicked
    };

    return (
        <>
            <button onClick={toggleImage}>
                {isVisible ? "Hide Image" : "Show Image"}
            </button>
            {isVisible && (
                <img onClick={hideImage} src={image} alt="coding image" />
            )}
        </>
    );
}

export default Profilepic;
