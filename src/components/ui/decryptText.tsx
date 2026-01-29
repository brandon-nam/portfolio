import React, { useState, useEffect, useRef, useCallback } from "react";

export const DecryptText = ({ targetText = "", className = "", textClassName = "" }) => {
    const [displayText, setDisplayText] = useState(targetText);
    const intervalRef = useRef(null);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%@$#*";

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const startAnimation = useCallback(() => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                targetText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) return targetText[index];
                        if (char === " ") return " ";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join(""),
            );

            if (iteration >= targetText.length) {
                clearInterval(intervalRef.current);
            }

            // Controls speed of "decryption"
            iteration += 1 / 3;
        }, 30);
    }, [targetText]);

    return (
        <div className={`flex items-center justify-center text-muted ${className}`}>
            <h1 onMouseEnter={startAnimation} className={`cursor-pointer text-4xl max-md:text-xl ${textClassName}`}>
                {displayText}
            </h1>
        </div>
    );
};
